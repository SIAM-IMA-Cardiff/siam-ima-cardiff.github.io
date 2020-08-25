"use strict";

function _theatre_create_element(args)
{
    var element = document.createElement(args.tag);
    if (args.classes != undefined)
        for (var i = 0; i < args.classes.length; i++)
            element.classList.add(args.classes[i]);
    if (args.src != undefined)
        element.setAttribute('src', args.src);
    if (args.children != undefined)
        for (var i = 0; i < args.children.length; i++)
            element.appendChild(args.children[i]);
    if (args.onclick != undefined)
        element.addEventListener('click', args.onclick);
    return element;
}

var theatre = theatre || {

    show: function(theatre_data_id, clicked_item)
    {
        if (history && history.pushState)
            history.pushState({
                type: 'theatre',
                data_id: theatre_data_id,
                current_item: clicked_item,
            }, 'theatre');
        theatre.show_without_history(theatre_data_id, clicked_item);
    },

    show_without_history: function(theatre_data_id, clicked_item)
    {
        if (theatre.running)
            return false;

        var el_theatre_data = document.getElementById(theatre_data_id);
        if (!el_theatre_data)
            return false;

        var encoded_items = el_theatre_data.getAttribute('data-theatre');
        var site_baseurl = el_theatre_data.getAttribute('data-baseurl');
        if (!encoded_items)
            return false;

        var items = JSON.parse(encoded_items);
        if (!items)
            return false;

        theatre.data_id = theatre_data_id;
        theatre.items = items;
        theatre.running = true;

        for (var i = 0; i < theatre.items.length; i++)
        {
            var data = theatre.items[i];
            if (data.thumb != undefined)
                data.thumb = data.thumb.replace(
                    '{'+'{'+' site.baseurl '+'}'+'}',
                    site_baseurl);
            if (data.url != undefined)
                data.url = data.url.replace(
                    '{'+'{'+' site.baseurl '+'}'+'}',
                    site_baseurl);
            data.element = _theatre_create_element(
            {
                tag: 'img',
                classes: ['content'],
                src: data.url
            });
        }

        theatre.el_content_container = _theatre_create_element(
        {
            tag: 'div',
            classes: ['content-container']
        });
        var _create_button = function(symbol, cls, onclick)
        {
            return _theatre_create_element(
            {
                tag: 'div',
                classes: [cls],
                onclick: onclick,
                children:
                [
                    _theatre_create_element(
                    {
                        tag: 'div',
                        classes: ['button'],
                        children:
                        [
                            _theatre_create_element(
                            {
                                tag: 'span',
                                classes: ['fa', symbol]
                            })
                        ]
                    })
                ]
            });
        };
        theatre.el_root = _theatre_create_element(
        {
            tag: 'div',
            classes: ['theatre'],
            children:
            [
                _theatre_create_element(
                {
                    tag: 'div',
                    classes: ['body'],
                    children:
                    [
                        theatre.el_content_container,
                        _create_button('fa-chevron-left', 'left-pane',
                            theatre.previous_event),
                        _create_button('fa-chevron-right', 'right-pane',
                            theatre.next_event),
                        _create_button('fa-close', 'exit',
                            theatre.exit_event),
                    ]
                })
            ]
        });

        theatre.current = null;
        theatre.update_content_element(clicked_item);

        document.body.appendChild(theatre.el_root);
        document.addEventListener('keydown', theatre.keydown_event);
    },

    destroy: function()
    {
        theatre.destroy_without_history();
        if (history && history.pushState)
            history.back();
    },

    destroy_without_history: function()
    {
        theatre.running = false;
        if (theatre.el_root.parentNode)
            theatre.el_root.parentNode.removeChild(theatre.el_root);
        delete theatre.el_root;
        delete theatre.el_content_container;
        document.removeEventListener('keydown', theatre.keydown_event);
    },

    update_content_element: function(new_current)
    {
        if ( new_current >= theatre.items.length)
            new_current = theatre.items.length-1;
        if (new_current < 0)
            new_current = 0;
        if (theatre.current === new_current)
            return false;

        if (history && history.pushState && history.replaceState)
            history.replaceState({
                type: 'theatre',
                data_id: theatre.data_id,
                current_item: new_current,
            }, 'theatre');

        theatre.current = new_current;
        theatre.el_content_container.innerHTML = '';
        theatre.el_content_container.appendChild(
            theatre.items[theatre.current].element);

        if (theatre.current > 0)
            theatre.el_root.classList.remove('no-previous');
        else
            theatre.el_root.classList.add('no-previous');
        if (theatre.current < theatre.items.length-1)
            theatre.el_root.classList.remove('no-next');
        else
            theatre.el_root.classList.add('no-next');
    },

    next_event: function(e)
    {
        theatre.update_content_element(theatre.current+1);
        e.preventDefault();
        return false;
    },

    previous_event: function(e)
    {
        theatre.update_content_element(theatre.current-1);
        e.preventDefault();
        return false;
    },

    keydown_event: function(e)
    {
        if (e.keyCode == 27 || e.keyCode == 81) // escape, `q`
            theatre.destroy();
        else if (e.keyCode == 37 || e.keyCode == 188) // left, `,`
            theatre.update_content_element(theatre.current-1);
        else if (e.keyCode == 39 || e.keyCode == 190 ) // right, `.`
            theatre.update_content_element(theatre.current+1);
        else if (e.keyCode == 36) // home
            theatre.update_content_element(0);
        else if (e.keyCode == 35) // end
            theatre.update_content_element(theatre.items.length-1);
        else
            return true;
        e.preventDefault();
        return false;
    },

    exit_event: function(e)
    {
        theatre.destroy();
        e.preventDefault();
        return false;
    }
};

window.addEventListener('popstate', function(e)
{
    if (e.state && e.state.type == 'theatre')
    {
        if (theatre.running)
            theatre.destroy_without_history();
        theatre.show_without_history(e.state.data_id, e.state.current_item);
    }
    else
    {
        if (theatre.running)
            theatre.destroy_without_history();
    }
});

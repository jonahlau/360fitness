// Limit scope pollution from any deprecated API
jQuery(function($){

    var load_changer = function(){
        var t_body = $('body');
        var t_div = $('.boxed_fluid');
        var t_transition_time = 0;
        var t_transition_apply = function(){
            clearTimeout(t_transition_time);
            t_body.addClass('animated_change');
            t_transition_time = setTimeout(t_transition_end, 1500);
        };
        var t_transition_end = function(){
            t_body.removeClass('animated_change');
        };
        var t_color = $('select[name="site_color"]');
        var t_layout = $('select[name="site_layout"]');
        t_color.change(function(){
            var t = $(this);
            if(t.val()!==t.data('color')){
                t_transition_apply();
                switch(t.val()){
                    case 'dark':
                        t_div.addClass('black_version');
                        break;
                    case 'light':
                        t_div.removeClass('black_version');
                        break;
                    default:
                        break;
                }
                t.data('color', t.val());
            }
        });
        t_layout.change(function(){
            var t = $(this);
            if(t.val()!==t.data('layout')){
                t_transition_apply();
                switch(t.val()){
                    case 'boxed':
                        t_body.addClass('boxed');
                        break;
                    case 'wide':
                        t_body.removeClass('boxed');
                        break;
                    default:
                        break;
                }
                t.data('layout', t.val());
            }
        });
        $('#background_patterns>li').click(function(){
            if('boxed'!==t_layout.data('layout')){
                t_layout.val('boxed');
                t_transition_apply();
                t_body.addClass('boxed');
                t_layout.data('layout','boxed');
            }
            t_body.css({backgroundImage: 'url('+$(this).children('img').attr('src')+')', backgroundRepeat: 'repeat'});
        });
        $('#background_images>li').click(function(){
            if('boxed'!==t_layout.data('layout')){
                t_layout.val('boxed');
                t_transition_apply();
                t_body.addClass('boxed');
                t_layout.data('layout','boxed');
            }
            t_body.css({backgroundImage: 'url('+$(this).children('img').attr('src')+')', backgroundRepeat: 'no-repeat'});
        });
        var t_box = $('.color_scheme');
        var t_box_width = t_box.outerWidth();
        var t_color = '#22948f';
        var t_picker = undefined;
        var t_picker_container = $('<div/>').attr('id','color_picker').css({position: 'fixed', zIndex: 999, top: 248, left: 200});
        var t_color_input = $('<input/>').css({position: 'absolute', zIndex: 999, top: 198, left: 0, width: '100%', textAlign: 'center', lineHeight: '1.6em', border: '1px solid black'});
        $('.color_scheme_settings').click(function(){
            if(t_box.data('visible')){
                t_box.css({left: -t_box_width});
                t_box.data('visible', false);
                t_picker_container.hide();
            }else{
                t_box.css({left: 0});
                t_box.data('visible', true);
            }
        });
        var t_callback = function(){
            var t_style = $('head>#custom_style');
            var t_output = '';
            if(!t_style.length)
                t_style = $('<style/>').attr('id','custom_style').appendTo('head');
            t_output += "\n\
                .slider .slide-text h1 span,\n\
                .d-text-c.active,\n\
                .d-text-c-h:hover,\n\
                .testimonials-slider .testimonials-dots li.active i,\n\
                header .menu ul li.active>a,\n\
                .d-text-c {\n\
                    color: "+t_color+" !important;\n\
                }\n\
                .slider .counting li.active,\n\
                .d-bg-c-a.active,\n\
                .d-bg-c-h:hover,\n\
                .d-bg-c {\n\
                    background: "+t_color+" !important;\n\
                }\n\
                .d-border-c-a.active,\n\
                .d-border-c-h:hover,\n\
                .d-border-c {\n\
                    border-color: "+t_color+" !important;\n\
                }\n\
                .rombust:before {\n\
                    border-bottom: 12px solid "+t_color+" !important;\n\
                }\n\
                .rombust:after {\n\
                    border-top: 12px solid "+t_color+" !important;\n\
                }\n\
                .tab-widget .nav-tabs li.active a {\n\
                    border-top: 4px solid "+t_color+" !important;\n\
                }\n\
                ";
            t_style.html(t_output);
        };
        $('#site_color>li:lt(-1)').click(function(){
            t_color = $(this).children('span').css('background-color').replace(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig,function(c, r, g, b){return '#'+Number(r).toString(16)+Number(g).toString(16)+Number(b).toString(16);});
            t_callback();
            if(undefined!==t_picker){
                t_picker.setColor(t_color);
                t_color_input.val(t_color);
            }
        });
        var t_input_update = function(){
            t_color_input.val(t_color);
            t_color_input.css({backgroundColor: t_color, color: t_picker.hsl[2] > 0.5 ? '#000' : '#fff'});
        };
        $('#site_color>li:last').click(function(){
            if(undefined===t_picker){
                t_picker = $.farbtastic(t_picker_container.appendTo('body'));
                t_picker_container.append(t_color_input);
                t_picker.setColor(t_color);
                t_input_update();
                t_picker.linkTo(function(color){
                    t_color = color;
                    t_callback();
                    t_input_update();
                });
                t_color_input.change(function(){
                    t_picker.setColor(t_color_input.val());
                });
            }else{
                t_picker_container.toggle();
            }
        });
    };

    load_changer();

});
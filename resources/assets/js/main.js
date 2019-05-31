(function( $ ) {
    $(document).ready(function() {

        $(document).on('focus', '.formClient input', function(){
            $(this).next().addClass('input-filled');
        }).on('blur', '.formClient input', function(){
            if( $(this).val() !== '' ){
                $(this).next().addClass('input-filled');
            } else {
                $(this).next().removeClass('input-filled');
            }
        });

        $(document).on('focus', '.formLogin .input--kaede', function(){
            $(this).addClass('input--filled');
        }).on('blur', '.formLogin .input--kaede', function(){
            if( $(this).find('input').val() !== '' ){
                $(this).addClass('input--filled');
            } else {
                $(this).removeClass('input--filled');
            }
        });

        $(document).on('click', '.btnFileUpload', function(){
            $(this).next().click();
        });

        $(document).on('keydown', '.mobile', function(e){
            var key = e.charCode || e.keyCode || 0;
            // Allow numeric (and tab, backspace, delete) keys only
            return (key == 8 ||
                    key == 9 ||
                    key == 46 ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
        });

        $('.chosen-select').chosen({
            no_results_text: "Oops, nothing found!",
            width: "100%"
        });

        $('.disable-search').chosen({
            no_results_text: "Oops, nothing found!",
            width: "100%",
            disable_search: true
        });

        // var dlgtrigger = document.querySelector( '[data-dialog]' ),
        //     somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
        //     dlg = new DialogFx( somedialog );
        //
        // dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    });

    $(document).ready(function(){
        var $container = $('.grid'),
            colWidth = function () {
                var w = $container.width(),
                    columnNum = 1,
                    columnWidth = 0;

                if (w > 1200) {
                    columnNum  = 6;
                } else if (w > 900) {
                    columnNum  = 4;
                } else if (w > 600) {
                    columnNum  = 4;
                } else if (w > 300) {
                    columnNum  = 4;
                } else if (w < 300) {
                    columnNum  = 2;
                    columnWidth = 0;
                }

                columnWidth = Math.floor(w/columnNum);
                $container.find('.grid-item').each(function() {
                    var $item = $(this),
                        multiplier_w = $item.attr('class').match(/item-w(\d)/),
                        multiplier_h = $item.attr('class').match(/item-h(\d)/),
                        width        = multiplier_w ? columnWidth * multiplier_w[1]-4 : columnWidth-20,
                        height       = multiplier_h ? columnWidth * multiplier_h[1] * 0.5-4 : columnWidth * 1-24;;
                    if( columnNum == 1 ){
                        width = columnWidth;
                    }

                    $item.css({
                        width: width,
                        height: height
                    });
                });
                return columnWidth;

            },
            isotope = function () {

                var $grid = $container.isotope({
                    itemSelector: '.grid-item',
                    layoutMode: 'fitRows',
                    fitRows: {
                        columnWidth: colWidth(),
                        gutter: 15
                      }
                });
                $grid.imagesLoaded().progress( function() {
                  $grid.isotope('layout');
                });
            };
        isotope();

        $(window).on('debouncedresize', isotope);
    });

})( jQuery );

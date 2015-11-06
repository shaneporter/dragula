(function() {

    /*
        dragula([document.querySelector('.container')], {
            moves: function(el, container, handle) {
                return !handle.classList.contains('bloc--inner');
            }
        });

        dragula([].slice.apply(document.querySelectorAll('.bloc')), {
            direction: 'horizontal'
        });
    */


    dragula([document.querySelector('.container')], {
        moves: function(el, container, handle) {
            return !handle.classList.contains('col');
        }
    });

    dragula([].slice.apply(document.querySelectorAll('.row')), {
        direction: 'horizontal'
    });




})();

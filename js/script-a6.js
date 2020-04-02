    function progress(value) {
        let parent = $('.progress').width();
        let child = parseInt(($("#progressbar").width() / parent * 100).toFixed());

        if (child == 100) {
            alert('Поздравляю, теперь ты паладин 80 уровня :)');
        } 

        else {
          console.log(child);
          console.log(value);
          $('#progressbar').width((child + value) * parent / 100);
        }
    }

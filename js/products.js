$('.carousel').carousel({
  interval: 2000
})

// Removes focus on button after closing modal.
$('#buyCansModal').on('shown.bs.modal', function(e){
    $('#buyCansModalTrigger').one('focus', function(e){$(this).blur();});
});

$('#buyBottlesModal').on('shown.bs.modal', function(e){
    $('#buyBottlesModalTrigger').one('focus', function(e){$(this).blur();});
});

$('#buyVendingModal').on('shown.bs.modal', function(e){
    $('#buyVendingModalTrigger').one('focus', function(e){$(this).blur();});
});
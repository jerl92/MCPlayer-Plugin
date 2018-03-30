function ajax_playlist_remove_track($, object_id) {
                
                $.ajax({    
                    url: remove_track_ajax_url,
                    type: 'POST',
                    data: {
                        'object_id': object_id,
                        'action': 'remove_track',
                    },
                    dataType: 'JSON',
                    success: function(data){
                        //print stuff heres
                        $("#player56s-removetrack").html(data);  
                        $(".player56s").player56s($); 
                        $("#player56s-removetrack").html(null);
                        $("#postid-"+object_id+" rs-item-nav a").removeClass("saved");
                        ajax_playlist_add_sidebar($, object_id);
                    },
                    error: function(errorThrown){
                        //error stuff here
                    },
            });
    
    }
    

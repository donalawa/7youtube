

$(document).ready(function(){
    //Data needed for the project

   //Api key
   let key = 'AIzaSyASonkJKd3RcXFC1ySwHIFOZRN7OU9qCrU';

   //Name of playlist
   let playlistId = 'PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX';

   //URL WHERE WE MAKE THE FETCH REQUEST  FOR THE DATA
   let URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

   //this are the required dat needed to make out api call
   let options = {
       part: 'snippet',
       key: key,
       maxResults: 30,
       playlistId: playlistId
   }
   //
   loadVids();
   function loadVids(){
       $.getJSON(URL,options, function(data){
           console.log(data);
           let id = data.items[0].snippet.resourceId.videoId;
           // let c_title = data.items[0].snippet.title;
           mainVid(id);
           // document.querySelector('.main-vid-title').innerHTML = `${c_title}`;
           resultLoop(data);
       })
   }

   function mainVid(id){
       $('#video').html(`
       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}" 
       frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
       picture-in-picture" allowfullscreen> </iframe>
       `)
   }

   function resultLoop(data){

       data.items.forEach(function(item){
       
       let thumb = item.snippet.thumbnails.medium.url;
       let title = item.snippet.title;
       let vid = item.snippet.resourceId.videoId;
       

       $('.right').append(`
       <article class="item" data-key="${vid}">
       <img src="${thumb}" alt="" class="thumb">
           <div class="details">
               <h4 class="title">${title}</h4>
           </div>
   </article>
   `)
       })
       
   }

  $('.right').on('click','article', function(){
      let id = $(this).attr('data-key');
      mainVid(id);
  })
})
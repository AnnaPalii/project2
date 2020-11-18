const renterId = parseInt(location.href.split('rntr=')[1]);

$(".submit-object").on('click',
   function(e) {

      const objName = $("#objectName").val();
      const objLength = $("#inputLength").val();
      const objWidth = $("#inputWidth").val();
      const objHeight = $("#inputHeight").val();
      e.preventDefault();

      const payload = {
         name: objName,
         length: objLength,
         width: objWidth,
         height: objHeight,
         RenterId: renterId
      }
      console.log(payload)
      $.post('/api/object/create', payload)
         .then(() => location.href= '/')
   }
)
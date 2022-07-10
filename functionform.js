function fileValidation() {
    var fileInput = document.getElementById('foto');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
         if(!allowedExtensions.exec(filePath)){
            alert('Silakan upload file dengan tipe .jpeg/.jpg/.png/.gif');
            fileInput.value = '';
            return false;
    } else {
        if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
        document.getElementById('upload_foto').src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
        }
    }
} 
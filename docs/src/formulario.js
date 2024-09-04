const imageUpload = document.getElementById('imageUpload');
const fileName = document.getElementById('fileName');

imageUpload.addEventListener('change', function() {
    if (this.files.length > 0) {
        fileName.textContent = this.files[0].name;
    } else {
        fileName.textContent = 'Nenhum arquivo selecionado';
    }
});
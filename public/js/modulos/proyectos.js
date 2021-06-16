import Swal from 'sweetalert2';
import axios from 'axios';
// import e from 'express';

const btnEliminar = document.querySelector('#eliminar-proyecto');

if(btnEliminar){
    btnEliminar.addEventListener('click', e => {
        const urlProyecto = e.target.dataset.proyectoUrl;
        //console.log(urlProyecto);
        
        Swal.fire({
                title: 'Estas seguro?',
                text: "Una vez eliminado el proyecto, no se puede recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borrar esto!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                // if (result.value) {
                    // Enviar peticion a Axios
                    const url = `${location.origin}/proyectos/${urlProyecto}`;
                    
                    axios.delete(url, { params: {urlProyecto}})
                        .then(function(respuesta){
                            console.log(respuesta);

                            Swal.fire(
                                'Eliminado!',
                                respuesta.data,
                                'success'
                            );

                            // Redireccionar al inicio
                            setTimeout(() => {
                            window.location.href = '/';
                            }, 2000);
                        })
                        .catch(() => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Hubo un error',
                                text: 'No se pudo eliminar el Proyecto'
                            })
                        });
                }
            });
    });
}

export default btnEliminar; 

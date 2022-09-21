import Swal from "sweetalert2";

export function sweetAlert(text, state) {
    Swal.fire({
        background: "hsl(193, 80%, 58%)",
        width: "17rem",
        customClass: "swal-height",
        toast: true,
        showConfirmButton: false,
        iconColor: '#fff',
        color: '#fff',
        position: 'top-right',
        icon: state,
        title: text,
        timer: 2500
    })
}

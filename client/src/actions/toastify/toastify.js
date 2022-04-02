import { toast } from 'react-toastify';

export const errorToast = (input) => {
    const message = input ? input : "error!"; 

    toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        closeOnClick: true,
        draggable: true,
    });
    toast.clearWaitingQueue();
}

export const infoToast = (input) => {
    const message = input ? input : "info!"; 

    toast.info(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        closeOnClick: true,
        draggable: true,
    });
    toast.clearWaitingQueue();
}

export const warningToast = (input) => {
    const message = input ? input : "warning!"; 

    toast.info(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        closeOnClick: true,
        draggable: true,
    });
    toast.clearWaitingQueue();
}

// other options include 'success' and 'warning'
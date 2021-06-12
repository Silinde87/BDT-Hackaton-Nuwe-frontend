import toast from "react-hot-toast";

export const showErrorMessage = (message, icon) => {
    toast.error(message, {
        icon: icon,
        style: {
            borderRadius: "20px",
            background: "#333",
            color: "#fff",
        },
    });
}

export const showSucessMessage = () => {
    return toast.promise(
        fakePromiseDelay(),
         {
           loading: 'Guardando...',
           success: <b>Todo ha ido bien!</b>,
           error: <b>Algo ha ido mal.</b>,
         }
    );
}

const fakePromiseDelay = () => {
    return new Promise(resolve => setTimeout(resolve, 1500));
}
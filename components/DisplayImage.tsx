export const DisplayImage = (
    event: any,
    isObject: string,
    setObject: Function,
    defaultImage: string
) => {
    if (event.target.files.length > 0) {
        let selectedImage = event.target.files[0];
        if (
            ["image/jpeg", "image/png", "image/svg+xml"].includes(
                selectedImage.type
            )
        ) {
            let ImageReader = new FileReader();
            ImageReader.readAsDataURL(selectedImage);

            ImageReader.addEventListener("load", (event: any) => {
                setObject(event.target.result);
            });
        } else {
            alert("Invalid Image File");
        }
    } else {
        alert("Nothing Happens");
        setObject(defaultImage);
    }
};

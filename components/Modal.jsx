import React from "react";

const Modal = () => {
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label for="my-modal-4" class="btn modal-button">
        open modal
      </label>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">Congratulations daisyUI is Live!</h3>
          <p class="py-4">
            You've successfully setup 'app name' and you are running with the
            following themes... 'themes list'
          </p>
        </label>
      </label>
    </div>
  );
};

export default Modal;
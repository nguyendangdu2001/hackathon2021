import { Dialog, Transition } from "@headlessui/react";
// import { useHome } from "@hooks/useHome";
import { m } from "framer-motion";
import React, { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import useVaccine from "./useVaccine";

const LookDetail = ({ className, name, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useVaccine(id);
  const close = () => {
    setIsOpen(false);
  };
  //   const { data } = useHome();
  //   const { web: bankingData } = data || {};
  //   const { name_card, user_card, num_card, phone, branch_card } =
  //     bankingData || {};
  return (
    <>
      <m.div layout className="text-base " onClick={() => setIsOpen(true)}>
        Xem
      </m.div>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          static
          onClose={() => close()}
          className={`${className} fixed w-screen inset-0 z-[300] overflow-y-auto`}
          as="div"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="min-h-screen my-auto text-center">
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg space-y-4 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
                <div className="p-6 space-y-4">
                  <p className="fs__details">L???ch ti??m ch???ng</p>

                  <div>
                    {data?.map((v) => (
                      <div className="flex justify-between ">
                        <div>Ng??y ti??m : {v?.time_start?.split(" ")?.[0]}</div>
                        <div>???? ti??m : {v?.done ? "R???i" : "Ch??a"} </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-3 modal__custom__footer">
                    <button
                      type="button"
                      className="btn button-secondary--outline"
                      onClick={close}
                    >
                      ????ng
                    </button>
                    <button
                      type="button"
                      className="btn button-secondary"
                      onClick={close}
                    >
                      Xong
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
    // <div
    //   className={`${className} modal fade`}
    //   id="staticBackdrop"
    //   data-bs-backdrop="static"
    //   data-bs-keyboard="false"
    //   tabIndex="-1"
    //   aria-labelledby="staticBackdropLabel"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog">
    //     <div className="modal-content modal__custom">
    //       <div className="modal-header modal__custom__header">
    //         <button
    //           type="button"
    //           className="btn-close modal__custom__button--close"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div className="modal-body">
    //         <p className="fs__details">
    //           Vui l??ng chuy???n kho???n theo th??ng tin d?????i ????y ????? ch??ng t??i c?? th???
    //           k??ch ho???t b???n b??o c??o cho b???n.
    //         </p>
    //         <p className="mt-3 fs__title">VIETCOMBANK</p>
    //         <div className="mt-3 space-y-4 text-lg font-semibold">
    //           <p className="flex justify-between">
    //             S??? t??i kho???n: <span>04213141901</span>
    //           </p>
    //           <p className="flex justify-between">
    //             S??? ??i???n tho???i: <span>0334 741 236</span>
    //           </p>
    //           <p className="flex justify-between">
    //             T??n ?????y ?????: <span>????? Qu???c Huy</span>
    //           </p>
    //           <p className="flex justify-between">
    //             S??? ti???n: <span>699.000 vn??</span>
    //           </p>
    //         </div>

    //         <div className="space-y-2">
    //           <p
    //             className="pt-3 font-bold border-top"
    //             style={{
    //               borderColor: "#ffc367 !important",
    //               borderWidth: "2px !important",
    //             }}
    //           >
    //             L??u ??:
    //           </p>

    //           <p className="fs__details">
    //             Vui l??ng ki???m tra k??? th??ng tin chuy???n kho???n ????? tr??nh s??? c??? ????ng
    //             ti???c x???y ra, ch??ng t??i s??? kh??ng ho??n ti???n hay ch???u tr??ch nhi???m
    //             v???i c??c l???i ph??t sinh nh???m l???n th??ng tin.
    //           </p>

    //           <p className="fs__details">
    //             N???i dung chuy???n kho???n: H??? v?? t??n + s??t + era2021
    //           </p>
    //           <p className="fs__details">
    //             V?? d???: DO QUOC HUY 0334741236 ERA2021
    //           </p>
    //         </div>
    //       </div>
    //       <div className="modal-footer modal__custom__footer">
    //         <button
    //           type="button"
    //           className="btn button-secondary--outline"
    //           data-bs-dismiss="modal"
    //         >
    //           ????ng
    //         </button>
    //         <button type="button" className="btn button-secondary">
    //           Xong
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default styled(LookDetail)`
  .modal__custom {
    background-color: #fafafa;
    color: black;
    &__header,
    &__footer {
      border: 0;
    }
    &__button--close {
      color: #fafafa !important;
      font-weight: bolder;
      &:hover {
        color: $color-text-title;
      }
    }
  }
`;

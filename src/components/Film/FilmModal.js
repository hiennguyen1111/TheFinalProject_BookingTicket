import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL } from '../../redux/types/QuanLyPhimType';

// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
export default function PhimModal(props) {
  let { openModal, arrFilm, maPhimModal } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (openModal === true) {
      setShowModal(true);
    }
  }, [openModal]);

  
  let phimModal = arrFilm?.filter((phim) => phim.maPhim === maPhimModal)[0];

  console.log("phimModal", phimModal);
  console.log("phimModal.trailer.length",phimModal?.trailer.length)
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Trailer phim {phimModal?.tenPhim}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      dispatch({ type: OPEN_MODAL });
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <iframe
                    width="100%"
                    height="315"
                    src={`${phimModal?.trailer}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      dispatch({ type: OPEN_MODAL });
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
function Modal(props) {
    return(
        <div id="contents">
            <div className="modalbg" onClick={(e) => {
                        e.stopPropagation();
                        props.setModal(!true);
                    }}>
                <div className="modal">
                    <button className="xbtn1" onClick={() => {
                        props.setModal(!true);
                    }}><props.FontAwesomeIcon icon={props.faX}/></button>
                    <h4>모달 제목</h4>
                    <span>NEW</span>
                    <p>
                        지금 구매하고,<br />
                        다음에 결제하세요!<br />
                        <strong><span>네이버페이 후불결제</span></strong>
                    </p>
                    <div className="till-today-wrap">
                        <label>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span>오늘 하루 보지 않기</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
)};

export default Modal;
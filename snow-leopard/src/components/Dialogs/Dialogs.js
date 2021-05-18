import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    nameBot1
                </div>
                <div className={s.dialog}>
                    nameBot2
                </div>
                <div className={s.dialog}>
                    nameBot3
                </div>
                <div className={s.dialog}>
                    nameBot4
                </div>
                <div className={s.dialog}>
                    nameBot5
                </div>
                <div className={s.dialog}>
                    nameBot6
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
};

export default Dialogs;

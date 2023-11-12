import React, { useEffect, useState } from "react";
import d from "./Dashboard.module.css";
import {
  PeopleSharp,
  RunningWithErrors,
  Check,
  PendingActions,
  ReceiptSharp,
  Close,
} from "@mui/icons-material";

export default function Dashboard(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      {show ? (
        <div className={d.message} style={props.theme1}>
          <Close
            className={d.close}
            style={props.theme1}
            onClick={handleClose}
          />
          <h2 className={d.messageh2} style={{ color: "rgb(0, 255, 0)" }}>
            Sign in Successfull <Check />
          </h2>
        </div>
      ) : null}
      <div className={d.whole} style={props.theme1}>
        <h1 className={d.head}>Dashboard</h1>
        <div className={d.container}>
          <div className={d.item} style={props.theme_2}>
            <RunningWithErrors
              style={props.themeIcons}
              className={d.icon}
              sx={{ fontSize: 35 }}
            />
            <h2 className={d.h2}>Total Crimes</h2>
            <h1 className={d.h1} style={props.theme2}>
              17
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <ReceiptSharp
              style={props.themeIcons}
              className={d.icon}
              sx={{ fontSize: 35 }}
            />
            <h2 className={d.h2}>Total FIR</h2>
            <h1 className={d.h1} style={props.theme2}>
              20
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <PeopleSharp
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total Criminals</h2>
            <h1 className={d.h1} style={props.theme2}>
              26
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <Check
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total Cases Solved</h2>
            <h1 className={d.h1} style={props.theme2}>
              10
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <PendingActions
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total pending cases</h2>
            <h1 className={d.h1} style={props.theme2}>
              33
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <PeopleSharp
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total officer's</h2>
            <h1 className={d.h1} style={props.theme2}>
              27
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

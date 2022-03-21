import { createContext, useState } from "react";

const NotiContext = createContext({
  notification: null,
  showNotification: (notiData) => {},
  hideNotification: () => {},
});

export function NotiContextProvider(props) {
  const [noti, setNoti] = useState();

  const showNotificationHandler = (notiData) => {
    setNoti(notiData);
  }

  const hideNotificationHandler = () => {
    setNoti(null)
  }

  return (
    <NotiContext.Provider
      value={{
        notification: noti,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
      }}
    >
      {props.children}
    </NotiContext.Provider>
  );
}

export default NotiContext;
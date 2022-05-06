import { styled, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import { Item } from "../store/reducers/tasksReducer";

type Props = {
  item: Item;
};

const TaskCardBlock = styled("div")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: #1d1d1f;
  text-align: left;
  padding: 12px 16px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
`;

const DateSubtitle = styled("span")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #787878;
`;

const Name = styled("h6")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #1d1d1f;
  margin: 0;
`;

export const TasksCard: FC<Props> = ({ item }) => {
  const handleDate = useCallback((date: Date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${date.getDay() + 1} ${
      monthNames[date.getMonth()]
    }, в ${date.getHours()}:${date.toLocaleString().slice(0, 2)}`;
  }, []);

  const getInitials = function (string: String) {
    let names = string.split(" "),
      initials =
        names[0].split("").splice(0, 1).join("").toUpperCase() +
        names[0].slice(1) +
        " ";

    if (names.length > 1) {
      initials += `${names[names.length - 1].substring(0, 1).toUpperCase()}.`;
    }
    return initials;
  };

  return (
    <TaskCardBlock>
      <DateSubtitle>{handleDate(new Date(item.createTimestamp))}</DateSubtitle>
      {!item.clientName ? "" : <Name>{getInitials(item.clientName)}</Name>}

      <img
        style={{ position: "absolute", top: 12, right: 16 }}
        width={24}
        height={24}
        src="https://s3-alpha-sig.figma.com/img/cfaa/8ddf/c04f101e4e3777d8122cd9e0b4b761fd?Expires=1652659200&Signature=XfA6bOCsl8FOdfDcR~zW82nJu~yrz8etMqj2vCANWGoRrKf7GYCzA4R-df~pbBEQ~y-c9BMXDfDPTMiVeHOlaIW105mcK2a9t2thWBS59Qeo2JEgHbnsQexmJJMWWdS1qXw7JsA7Fhp3psOVmEtivBkNf~4e6L7ZS15g8DVTIMgaMFpr1EOVTrOLDhScfS7rZj0r~eLjLvHmB9ZOj6xrdpGyxlQclK3T136KNvetYv6G32NoXFxkrlqcdAdBd5TkC2Nzco0TUlVbCMyO~TY7HztUv540cVmgwgdJdB6SxdpmLDOz6FJeOrp-Szp3pQUY61CX-DUZP7G4N6nl3kBqPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="avatar"
      ></img>
    </TaskCardBlock>
  );
};

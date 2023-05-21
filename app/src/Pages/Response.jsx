import React from "react";
import { useLocation } from "react-router-dom";
import "./Response.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Response(props) {
  const data = useLocation();
  const date = new Date(data.state.createdAt);
  console.log(data.state);
  return (
    <div className="responseWrapper">
      <div className="formName"><span className="formLine">Form Name</span></div>
      <div className="userId">
        <div>User id</div>
        <div>{data.state.userId}</div>
      </div>
      <div className="responseId">
        <div>Response id</div>
        <div>{data.state._id}</div>
      </div>
      {data.state.fields.map((response) => {
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={
                  response.keyStyles
                    ? {
                        textDecoration: response.keyStyles.underlined
                          ? "underline"
                          : "none",
                        fontWeight: response.keyStyles.bold ? "bold" : "none",
                        fontSize: response.keyStyles.fontSize
                          ? response.keyStyles.fontSize
                          : 16,
                        fontStyle: response.keyStyles.italic
                          ? "italic"
                          : "none",
                      }
                    : {}
                }
              >
                {response.key}
                {response.required && <span style={{ color: "red" }}>*</span>}
              </Typography>
              <Typography
                sx={
                  response.valueStyles
                    ? {
                        textDecoration: response.valueStyles.underlined
                          ? "underline"
                          : "none",
                        fontWeight: response.valueStyles.bold ? "bold" : "none",
                        fontSize: response.valueStyles.fontSize
                          ? response.valueStyles.fontSize
                          : 16,
                        fontStyle: response.valueStyles.italic
                          ? "italic"
                          : "none",
                      }
                    : {}
                }
              >
                {response.value}
              </Typography>
            </CardContent>
          </Card>
        );
      })}

      <div className="responseCreatedAt">
        <div>Created at</div>
        <div>
          {date.toLocaleTimeString()} {date.getDate()}-{date.getMonth() + 1}-
          {date.getFullYear()}
        </div>
      </div>
    </div>
  );
}

// sx={{ color: pink[500] }}

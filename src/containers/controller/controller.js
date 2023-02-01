import React, { Component } from "react";
import { Row, Col, Divider } from "antd";
import { Typography } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

import Player from "../../components/Player/Player";
const { Title } = Typography;

class Controller extends Component {
    state = {
        playerOne: {
          active: true,
          weapon: "",
          status: "",  
        },
        playerTwo: {
            active: false,
            weapon: "",
            status: "",
        }
    }
};
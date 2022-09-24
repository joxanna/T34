import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./SearchButton32.css";

function SearchButton32() {
  return (
    <div className="search-button">
      <Antd.Button size="large" type="default" shape="default" disabled={false}>
        <AntDesignIcons.SearchOutlined />
        Search
      </Antd.Button>
    </div>
  );
}

export default SearchButton32;

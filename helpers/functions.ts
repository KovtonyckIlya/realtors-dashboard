import React from "react";
import moment from "moment";

export const layoutPanelHide = (mainPanel:  React.RefObject<HTMLDivElement>) => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
    }
    if (mainPanel.current) {
        mainPanel.current.scrollTop = 0;
    }
    const element = document.getElementById("bodyClick");
    if (
        window.innerWidth < 993 &&
        element?.parentNode &&
        document.documentElement.className.indexOf("nav-open") !== -1
    ) {
        document.documentElement.classList.toggle("nav-open");
        element.parentNode.removeChild(element);
    }
}


export const sideBarToggle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    const node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
        document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
}


export const getFormattedDate = (date: Date) => {
    return moment(date).format('L')
}


export const sleep = (duration: number) => new Promise(resolve => setTimeout(resolve, duration));


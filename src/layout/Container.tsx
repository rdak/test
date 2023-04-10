import React from "react";

export const Container: React.FC<React.PropsWithChildren> = (props) => {
	return <div className="container">{props.children}</div>;
};

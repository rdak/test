import React, { Component } from "react";

interface IList {
	list: string[];
	add: (tag: string) => void;
	remove: (tag: string) => void;
}

/**
 * List component draws items
 * @param props
 */
export const List: React.FC<IList> = (props) => {
	return (
		<>
			<ul className="list">
				{props.list.map((item) => {
					return (
						<Item key={item} item={item} onClick={props.remove} />
					);
				})}
			</ul>
			<Input onClick={props.add} />
		</>
	);
};

/**
 * List item
 * @param props
 */
export const Item: React.FC<{
	item: string;
	onClick?: (tag: string) => void;
}> = (props) => {
	return (
		<li className="list__item" onClick={(e) => props.onClick(props.item)}>
			{props.item}
		</li>
	);
};

/**
 * Input components includes input+button
 */
export class Input extends Component<{ onClick: (tag: string) => void }, {}> {
	protected ref: HTMLInputElement;

	public render() {
		return (
			<div className="list__input">
				<input type="text" ref={(el) => (this.ref = el)} />
				<button
					onClick={(e) => {
						this.props.onClick(this.ref.value);
						this.ref.value = "";
					}}
				>
					Add
				</button>
			</div>
		);
	}
}

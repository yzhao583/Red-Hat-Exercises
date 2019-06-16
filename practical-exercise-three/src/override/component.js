import { Component as BaseComponent } from 'react';
import autoBind from 'react-autobind';

class Component extends BaseComponent {
	constructor(props) {
		super(props);	
		autoBind(this);
	}
}
export default Component;
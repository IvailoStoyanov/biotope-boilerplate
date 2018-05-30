import {Store} from "redux";
import {SliderState} from "./interfaces/SliderState";
import {Slider} from "./lib/slider";
import {hyper} from 'hyperhtml/esm';

export class SliderComponent extends HTMLElement {
	private html: any;
	private slider: any;
	private cache: SliderState;

	constructor() {
		super();
		this.html = hyper.bind(this);

		// this.initStore(this.store, '123456', {
		// 	headline: 'Foo',
		// 	previousSlideText: '< Previous',
		// 	nextSlideText: 'Next >',
		// 	images: [
		// 		'https://dummyimage.com/900x300/0000ff/ffffff&text=Slide+1',
		// 		'https://dummyimage.com/900x300/00ff00/ffffff&text=Slide+2',
		// 		'https://dummyimage.com/900x300/ff0000/ffffff&text=Slide+3'
		// 	],
		// 	showNavigation: true,
		// 	startWithSlide: 0,
		// 	currentSlide: 0
		// });
	}

	/*
        TODO Tasks
        - Add redux state
        - Move event logic to external file
        - Implement Sub Component for Slider Navigation
        - Implement de-/reHydrate PoC plugin
     */

	connectedCallback() {
		this.render();
		this.slider = new Slider(this.querySelector(".vjslider"), {});
	}

	slideToNext(e: any) {
		e.preventDefault();
		// const newState = {
		// 	...this.cache,
		// 	currentSlide: this.cache.currentSlide - 1
		// };
        //
		// this.store.dispatch(setEntryState('123456', newState));
		this.slider.next();
	}

	slideToPrevious(e: any) {
		e.preventDefault();
		this.slider.prev();
	}

	render() {
		// const state = {};// this.store.getState().entries['123456'];
		// return this.html`
		// 		<h1>${state.headline}</h1>
        //         <div class="vjslider">
        //         	${state.images.map((url: any) => ` <div class="vjslider__slide"><img src=${url} alt=""></div>`)}
		// 		</div>
		// 		<ul class="sliderNavigation">
		// 			<li class="sliderNavigation__element">
		// 					<button class="js-prev" onclick=${(e:any) => {this.slideToPrevious(e)}}>
		// 					${state.previousSlideText}
		// 				</button>
		// 			</li>
		// 			<li class="sliderNavigation__element">
		// 				<button class="js-next" onclick=${(e:any) => {this.slideToNext(e)}}>
		// 					${state.nextSlideText}
		// 				</button>
		// 			</li>
		// 		</ul>
        //     `;
	}
}

// if (!customElements.get(componentName)) {
// 	customElements.define(componentName, component as any);
// }

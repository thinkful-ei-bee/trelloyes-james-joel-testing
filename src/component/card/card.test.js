import React from 'react';
import ReactDOM from 'react-dom';
import STORE from '../../store/store';
import renderer from 'react-test-renderer';

import Card from './card';

describe('<Card />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Card allCards={STORE.allCards} cardIds={STORE.lists[0].cardIds}/>, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<Card />', () => {
    it('renders without crashing', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card allCards={STORE.allCards} cardIds={STORE.lists[0].cardIds}/>).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});
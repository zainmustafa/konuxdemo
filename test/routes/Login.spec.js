import React from "react";
import { mount } from "enzyme";
import NotFound from "routes/NotFound";

function setup() {
    return mount(<NotFound />);
}


describe("Login", () => {
    const wrapper = setup(true);

    it("should be a StatelessComponent", () => {
        expect(wrapper.instance()).toBeNull();
    });

    it("should render properly", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});

import React from 'react';
import { mount } from 'enzyme';
import { fireEvent, render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./AuthProvider";



describe.only("AuthProvider", () => {
  it("authed is false by default", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => <span>Is logged in: {value.authed.toString()}</span>}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(getByText("Is logged in: false")).toBeTruthy();
  });
});

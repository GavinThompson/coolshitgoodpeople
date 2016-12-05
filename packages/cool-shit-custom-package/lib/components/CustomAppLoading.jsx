import React from 'react';
import { FormattedMessage } from 'react-intl';

const CustomAppLoading = () => <p>Test Test <FormattedMessage id="app.loading"/></p>

CustomAppLoading.displayName = "AppLoading";

module.exports = CustomAppLoading;
export default CustomAppLoading;
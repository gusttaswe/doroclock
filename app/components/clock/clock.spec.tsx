import { render, fireEvent } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';

import { Clock } from './clock';

describe('Clock Component', () => {

  it('Should render the Clock Correctly', () => {
    const { getByTestId, getByText } = render(<Clock />);

    expect(getByTestId('clock-timer')).toBeInTheDocument();
    expect(getByTestId('clock-settings-button')).toBeInTheDocument();
    expect(getByText(/[\d{2}:]{2}/)).toBeInTheDocument();
  })


  it('Should be able to open the Clock\'s settings Modal', async () => {
    const { getByTestId, findByTestId } = render(<Clock />);
    const clockSettingsButton = getByTestId('clock-settings-button');
    
    userEvent.click(clockSettingsButton);

    const clockSettingsModal = await findByTestId('clock-settings-modal')
    expect(clockSettingsModal).toBeInTheDocument();
  })
  
})
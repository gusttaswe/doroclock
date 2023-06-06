import { render, fireEvent } from '@testing-library/react';
import { Alignment, ClockAlignment } from './clock-alignment';

describe('ClockBold Component', () => {
  it('Should render button alignment correctly', () => {
    const updateFontSizeMockMock = jest.fn();
    const { getByTestId, rerender } = render(
      <ClockAlignment  
        algnmentType='horizontal'
        changeAlignment={updateFontSizeMockMock}
        currentAlignment={Alignment.START}
      />
    );
    
    const buttonElement = getByTestId('clock-alignment');
    expect(buttonElement).toBeInTheDocument();

    rerender(
      <ClockAlignment  
        algnmentType='vertical'
        changeAlignment={updateFontSizeMockMock}
        currentAlignment={Alignment.CENTER}
      />
    );

    expect(buttonElement).toBeInTheDocument();
  });

  it('Should call the changeAlignment function correctly when AlignmentType is Horizontal', () => {
    const updateFontSizeMockMock = jest.fn();
    const { getByTestId, rerender } = render(
      <ClockAlignment  
        algnmentType='horizontal'
        changeAlignment={updateFontSizeMockMock}
        currentAlignment={Alignment.START}
      />
    );
    
    const buttonElement = getByTestId('clock-alignment');
    
    fireEvent.click(buttonElement);
    const nextAlignment = Alignment.CENTER;
    expect(updateFontSizeMockMock).toBeCalledWith(nextAlignment);
    
    rerender(
      <ClockAlignment  
        algnmentType='horizontal'
        changeAlignment={updateFontSizeMockMock}
        currentAlignment={nextAlignment}
      />
    )
      
    fireEvent.click(buttonElement);
    expect(updateFontSizeMockMock).toBeCalledWith(Alignment.END);
  });

  it('Should call the changeAlignment function correctly when AlignmentType is Vertical', () => {
    const updateFontSizeMockMock = jest.fn();
    const { getByTestId, rerender } = render(
      <ClockAlignment  
        algnmentType='vertical'
        changeAlignment={updateFontSizeMockMock}
        currentAlignment={Alignment.START}
      />
    );
    
    const buttonElement = getByTestId('clock-alignment');
    
    fireEvent.click(buttonElement);
    const nextAlignment = Alignment.CENTER;
    expect(updateFontSizeMockMock).toBeCalledWith(nextAlignment);
    
    rerender(
      <ClockAlignment  
        algnmentType='vertical'
        changeAlignment={updateFontSizeMockMock}
        currentAlignment={nextAlignment}
      />
    )
      
    fireEvent.click(buttonElement);
    expect(updateFontSizeMockMock).toBeCalledWith(Alignment.END);
  });
});
'use client';

import {
  AlignVerticalJustifyStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
} from "lucide-react";

export enum Alignment {
  START = 'flex-start',
  CENTER = 'center',
  END = 'flex-end'
} 

type ClockAlignmentProps = {
  currentAlignment: Alignment;
  changeAlignment(newAlignment: Alignment): void;
  algnmentType: "horizontal" | "vertical";
}

const alignmentIcons = {
  horizontal:  {
    [Alignment.START]: AlignHorizontalJustifyStart,
    [Alignment.CENTER]: AlignHorizontalJustifyCenter,
    [Alignment.END]: AlignHorizontalJustifyEnd,
  },
  vertical: {
    [Alignment.START]: AlignVerticalJustifyStart,
    [Alignment.CENTER]: AlignVerticalJustifyCenter,
    [Alignment.END]: AlignVerticalJustifyEnd,
  }
}

export function ClockAlignment({  
  changeAlignment, 
  currentAlignment,
  algnmentType 
}: ClockAlignmentProps) {
  const CurrentIcon = alignmentIcons[algnmentType][currentAlignment];
  
  const handleAlignmentChange = () => {
    const alignmentValues = Object.values(Alignment);
    const currentIndex = alignmentValues.indexOf(currentAlignment);
    const nextAlignmentIndex = (currentIndex + 1) % alignmentValues.length;
    changeAlignment(alignmentValues[nextAlignmentIndex]);
  };

  return (  
    <button 
      data-testid='clock-alignment'
      className={`border border-slate-500 rounded-md p-1 bg-slate-400`}
      onClick={() => handleAlignmentChange()}
    >
      <CurrentIcon size={20} />
    </button>
  )
}
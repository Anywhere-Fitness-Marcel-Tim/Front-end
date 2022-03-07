import React from 'react'
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

function RequestQuotePage() {

  const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  function MySecondFormControl(props) {
  
    let checked = false;
  
    if (props.checked) {
      checked = props.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />
  }

  return (
    <div className='quotes-container'>
        <div className='quotes-card'>
        <h2>What are you looking for?</h2>
          <div className='options'>
            <div className='business-options'>
            <MySecondFormControl value="Business" name='session' label="Business" control={<Radio />} />
              <h2>Company Size</h2>
              <RadioGroup name="use-radio-group" defaultValue="first">
              <MyFormControlLabel value="first" label="SMB (10-100 employees)" control={<Radio />} />
              <MyFormControlLabel value="second" label="Large Business (100-300 employees)" control={<Radio />} />
              <MyFormControlLabel value="third" label="Corporation (500-1000 employees)" control={<Radio />} />
              </RadioGroup>
            </div>
            <div className='personal-options'>
            <MySecondFormControl value="Private" name='session' label="Private" control={<Radio />} />
              <h2>Session Type</h2>
              <RadioGroup name="use-radio-group" defaultValue="first">
              <MyFormControlLabel value="first" label="Community Event" control={<Radio />} />
              <MyFormControlLabel value="second" label="Fitness Party" control={<Radio />} />
              <MyFormControlLabel value="third" label="Family Gathering" control={<Radio />} />
              </RadioGroup>
            </div>
          </div>
          <div className='contact-info'>
            <label>Name:</label>
            <input className='' type='text' value='' name='name' />
            <label>Phone:</label>
            <input className='' type='text' value='' name='Phone' />
            <label>Email:</label>
            <input className='' type='text' value='' name='email' />
            <label>Accomodations:</label>
            <input className='' type='text' value='' name='accomodations' />
          </div>
        </div>
    </div>
  )
}

export default RequestQuotePage
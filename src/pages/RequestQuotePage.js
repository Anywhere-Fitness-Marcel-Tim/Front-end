import React from 'react'

function RequestQuotePage() {
  return (
    <div className='quotes-container'>
        <div className='quotes-card'>
          <div className='options'>
            <div className='business-options'>
              <input className='' type='radio' value='Business' name='session-type' /> Business
              <h2>Company Size</h2>
              <label>SMB (10-100 employees)</label>
              <input className='' type='radio' value='SMB' name='company-size' /> 
              <label>Large Business (100-300 employees)</label>
              <input className='' type='radio' value='Large' name='company-size' /> 
              <label>Corporation (500-1000 employees)</label>
              <input className='' type='radio' value='Corp' name='company-size' /> 
            </div>
            <div className='personal-options'>
            <input className='' type='radio' value='Personal' name='session-type' /> Personal
              <h2>Event Type</h2>
              <label>Community Event</label>
              <input className='' type='radio' value='comm-event' name='evt-type' /> 
              <label>Fitness Party</label>
              <input className='' type='radio' value='fitness-party' name='evt-type' /> 
              <label>Family Gathering</label>
              <input className='' type='radio' value='family-gathering' name='evt-type' /> 
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
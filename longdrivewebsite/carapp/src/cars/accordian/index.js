import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
   
//    <div>
//     <h1 style={{textAlign:"center"}}> frequently asked questions</h1>
//      <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header> Documents required?</Accordion.Header>
//         <Accordion.Body>
//         Age 18+

// After Booking Successful you can Upload your selfie photo & Aadhar card & Driving License in App one time only from next booking documents not required.

// Our team will verify & Approve your documents.

// You must upload your documents before your pickup time otherwise your booking will be Auto cancelled no refund.
         
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Damage protection</Accordion.Header>
//         <Accordion.Body>
//         If You Choose

// No Deposit Damage Protection

// You Pay Up-to 20000rs Only in case of damage

// If Major Damage Customer should bring fir copy or panchanama from police station Customer should support for Insurance

// Customer should support for Insurance Verification Until Approved

// If You Choose

// Bike + Rc

// No Insurance Will be Applied full Damage Amount Lakhs Of Money Should be Paid by Customer

// In-case of damage Rent Amount No Refund & No Adjustment for Another Car booking.

// Note: In case vehicle damage estimates exceed Rs 2,00,000, a mandatory deductible equivalent to the estimated damage amount is required.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
    
    
//    </div>
   
 <div>
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
      
      <Accordion >
        {/* Accordion Item 1: Documents Required */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Documents Required?</Accordion.Header>
          <Accordion.Body>
            Age 18+.<br />
            After booking is successful, you can upload your selfie, Aadhar card, and Driving License in the app. You need to do this only once. For all future bookings, documents won't be required.<br />
            Our team will verify and approve your documents.<br />
            You must upload your documents before your pickup time, otherwise your booking will be auto-cancelled with no refund.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item 2: Damage Protection */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Damage Protection</Accordion.Header>
          <Accordion.Body>
            If You Choose <br />
            <strong>No Deposit Damage Protection:</strong> You Pay Up-to 20,000 INR Only in case of damage.<br />
            <strong>If Major Damage:</strong> Customer should bring FIR copy or panchanama from the police station. Customer should support insurance verification until approved.<br />
            If you choose <br />
            <strong>Bike + RC:</strong> No insurance will be applied. Full damage amount (Lakhs of money) should be paid by the customer.<br />
            In case of damage, rent amount will not be refunded, and no adjustment will be made for another car booking.<br />
            <strong>Note:</strong> If vehicle damage estimates exceed Rs 2,00,000, a mandatory deductible equivalent to the estimated damage amount is required.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item 3: Late or Extension Rules */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Late or Extension Rules?</Accordion.Header>
          <Accordion.Body>
            Late returns or extensions are allowed with additional charges. The charges will be calculated based on the duration of the delay. Please refer to the terms & conditions for more details.<br />
            Extension requests can be made through the app before your scheduled return time. Late returns beyond the specified grace period will incur extra fees.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item 4: Pickup Car Location */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Where can I pick up the car?</Accordion.Header>
          <Accordion.Body>
            The pickup location will be specified in the app after booking. It will include detailed information about the location and any instructions for easy pickup. You can find the exact location in the app or your booking confirmation page.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item 5: Refund & Cancellation Policy */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Refund & Cancellation Policy</Accordion.Header>
          <Accordion.Body>
            Refunds and cancellations are subject to our policy. If you cancel within a specific period before pickup, you will receive a full refund. After the specified cancellation window, no refund will be issued. Cancellation charges may apply based on the time of cancellation.<br />
            For more detailed information, please refer to the cancellation policy in the app.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>


  );
}

export default BasicExample;
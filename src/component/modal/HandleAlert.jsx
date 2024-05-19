import { update } from "../../api";
import { PutData } from "../../api/REST/Put";
import ShowNotification from "../notifications/ShowNotifocation";

export const handleAlert = async ({
  value,
  setChange,
  ...changes
}) => {
  const fields = [
    { name: 'Benefit', state: 'benefitChange', url: update.benefit, id: value.BENEFIT_PLANS_ID },
    { name: 'Personal', state: 'personalChange', url: update.personal,id: value.PERSONAL_ID },
    { name: 'Employment', state: 'employmentChange', url: update.employment, id: value.EMPLOYMENT_ID},
    { name: 'Working Information', state: 'workingInforChange', url: update.working, id: value.EMPLOYMENT_WORKING_TIME_ID},
    { name: 'Previous Job', state: 'prevJobChange', url: update.JobHistory },
    { name: 'PayRate', state: 'PayRateChange', url: update.payrate,id: value.idEmployee},
  ];

  try {
    let allChangesSaved = true;
    
    for (const field of fields) {
      if (changes[field.state]) {
        const response = await PutData({ url: field.url, data: value, id: field.id });
        console.log(`${field.name} Change Response:`, response);

        if (response === true) {
          ShowNotification({
            message: 'Success',
            description: `${field.name} changes saved successfully`,
            type: 'success',
            duration: 2
          });
          changes[field.state](false);
        } else {
          ShowNotification({
            message: 'Failed',
            description: `Failed to save ${field.name} changes`,
            type: 'error',
            duration: 2
          });
          allChangesSaved = false;
        }
      }
    }

    if (allChangesSaved) {
      setChange(false);
    }

    ShowNotification({
      message: 'Success',
      description: 'Changes saved successfully',
      type: 'success',
      duration: 1
    });
  } catch (error) {
    ShowNotification({
      message: 'Failed',
      description: 'Did not save changes',
      type: 'error',
      duration: 1
    });
  }
};

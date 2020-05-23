import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivitityList from "./ActivitityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const { editMode, selectedActivity: activity } = activityStore;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {activity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm
            key={(activity && activity.id) || 0}
            activity={activity!}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);

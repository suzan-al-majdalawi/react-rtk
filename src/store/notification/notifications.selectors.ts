import type { RootState } from "../store";

export const selectNotificationsCount = (state: RootState) =>
     state.notification.count;
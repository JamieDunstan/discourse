import Component from "@glimmer/component";
import Notification from "discourse/models/notification";

export default class UserMenuBookmarkNotificationItem extends Component {
  get component() {
    if (this.args.item.constructor === Notification) {
      return "user-menu/notification-item";
    } else {
      return "user-menu/bookmark-item";
    }
  }
}

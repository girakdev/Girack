export interface ServerInfo {
  servername: string;
  registration: {
    available: boolean;
    invite: {
      inviteOnly: boolean;
    };
  };
  config: {
    PROFILE: {
      PROFILE_ICON_MAXSIZE: string;
      PROFILE_USERNAME_MAXLENGTH: string;
    };
    CHANNEL: {
      CHANNEL_DEFAULT_REGISTERANNOUNCE: string;
      CHANNEL_DEFAULT_JOINONREGISTER: string[];
      CHANNEL_CREATE_AVAILABLE: boolean;
      CHANNEL_DELETE_AVAILABLEFORMEMBER: boolean;
      CHANNEL_PRIVATIZE_AVAILABLEFORMEMBER: boolean;
    };
    MESSAGE: {
      MESSAGE_PIN_ROLE: string;
      MESSAGE_TXT_MAXLENGTH: string;
      MESSAGE_FILE_MAXSIZE: string;
    };
  };
  serverVersion: string;
}

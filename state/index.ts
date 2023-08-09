// Importing from ChatContext.tsx
import { ChatStateProvider, useChatState } from './ChatContext';

// Importing from AuthContext.tsx
import { AuthStateProvider, useAuthState } from './AuthContext';

// Re-exporting for concise imports
export {
  ChatStateProvider,
  useChatState,
  AuthStateProvider,
  useAuthState,
  // You can include other context providers and hooks here as needed
};

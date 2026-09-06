type ChannelKind = 'text' | 'voice' | 'private' | 'announcement' | 'stage' | 'forum';
type AppView = 'chat' | 'voice' | 'video' | 'dms' | 'server' | 'integrations' | 'profile';
type VoiceMode = 'voice' | 'ptt';
type ShareMode = 'none' | 'screen' | 'window';

type Server = {
  id: string;
  name: string;
  mark: string;
  unread: number;
};

type Channel = {
  id: string;
  name: string;
  kind: ChannelKind;
  category: string;
  unread?: number;
  tags?: string[];
  following?: boolean;
};

type Reaction = {
  name: string;
  count: number;
  me?: boolean;
};

type Thread = {
  title: string;
  replies: string[];
};

type Message = {
  id: number;
  channelId: string;
  author: string;
  role: string;
  time: string;
  body: string;
  pinned?: boolean;
  edited?: boolean;
  replyTo?: number;
  thread?: Thread;
  reactions: Reaction[];
};

type VoiceUser = {
  name: string;
  role: string;
  volume: number;
  muted: boolean;
  speaking: boolean;
};

type DM = {
  id: string;
  name: string;
  type: 'direct' | 'group';
  members: string[];
  active: boolean;
};

type Role = {
  id: string;
  name: string;
  color: string;
  icon: string;
  permissions: Record<string, boolean>;
};

type Connection = {
  id: string;
  name: string;
  connected: boolean;
  presence: string;
};

type Bot = {
  name: string;
  job: string;
  enabled: boolean;
};

type ModerationItem = {
  id: number;
  source: string;
  reason: string;
  content: string;
  status: 'pending' | 'approved' | 'blocked';
};

type NotificationItem = {
  id: number;
  title: string;
  body: string;
  read: boolean;
};

type AuditEvent = {
  id: number;
  time: string;
  actor: string;
  action: string;
};

type AppState = {
  activeServer: string;
  activeChannel: string;
  activeView: AppView;
  membersOpen: boolean;
  replyTo: number | null;
  draftText: string;
  searchQuery: string;
  profileStatus: 'Online' | 'Idle' | 'Do Not Disturb' | 'Invisible';
  customStatus: string;
  markdownSample: string;
  voiceJoined: boolean;
  voiceMode: VoiceMode;
  krisp: boolean;
  echoCancel: boolean;
  pushKey: string;
  cameraOn: boolean;
  shareMode: ShareMode;
  systemAudio: boolean;
  streamQuality: string;
  selectedDM: string;
  groupDraft: string[];
  stageSpeaker: boolean;
  stageRaisedHand: boolean;
  automodEnabled: boolean;
  welcomeGate: boolean;
  nitro: boolean;
  boosts: number;
  exportText: string;
};

const servers: Server[] = [
  { id: 'home', name: 'Community OS', mark: 'D2', unread: 4 },
  { id: 'design', name: 'Design Ops', mark: 'DO', unread: 2 },
  { id: 'build', name: 'Build Room', mark: 'BR', unread: 0 },
  { id: 'voice', name: 'Voice Lab', mark: 'VL', unread: 1 },
];

let channels: Channel[] = [
  { id: 'announcements', name: 'announcements', kind: 'announcement', category: 'Text', unread: 1, following: true },
  { id: 'general', name: 'general', kind: 'text', category: 'Text' },
  { id: 'handoff', name: 'handoff', kind: 'private', category: 'Text', unread: 3 },
  { id: 'ship-room', name: 'ship-room', kind: 'text', category: 'Text' },
  { id: 'forum-qna', name: 'q-and-a', kind: 'forum', category: 'Forum', tags: ['help', 'bug', 'showcase'] },
  { id: 'critique', name: 'critique', kind: 'voice', category: 'Voice' },
  { id: 'daily-sync', name: 'daily-sync', kind: 'voice', category: 'Voice' },
  { id: 'town-hall', name: 'town-hall', kind: 'stage', category: 'Stage' },
];

let voiceUsers: VoiceUser[] = [
  { name: 'Mira', role: 'Product lead', volume: 92, muted: false, speaking: true },
  { name: 'Ken', role: 'Frontend', volume: 68, muted: false, speaking: false },
  { name: 'Aya', role: 'Design systems', volume: 74, muted: true, speaking: false },
  { name: 'Lin', role: 'QA', volume: 56, muted: false, speaking: true },
];

let dms: DM[] = [
  { id: 'mira', name: 'Mira', type: 'direct', members: ['You', 'Mira'], active: true },
  { id: 'release-group', name: 'Release group', type: 'group', members: ['You', 'Mira', 'Ken', 'Aya', 'Lin', 'Rae'], active: true },
  { id: 'support-room', name: 'Support room', type: 'group', members: ['You', 'Lin', 'Rae'], active: false },
];

const permissionKeys = ['View', 'Send', 'Images', 'Voice', 'Manage'];

let roles: Role[] = [
  { id: 'admin', name: 'Admin', color: '#0A0A0A', icon: 'A', permissions: { View: true, Send: true, Images: true, Voice: true, Manage: true } },
  { id: 'vip', name: 'VIP', color: '#666666', icon: 'V', permissions: { View: true, Send: true, Images: true, Voice: true, Manage: false } },
  { id: 'new', name: 'Newcomer', color: '#999999', icon: 'N', permissions: { View: true, Send: false, Images: false, Voice: false, Manage: false } },
];

let connections: Connection[] = [
  { id: 'steam', name: 'Steam', connected: true, presence: 'Playing Hades II' },
  { id: 'spotify', name: 'Spotify', connected: true, presence: 'Listening to Midnight City' },
  { id: 'youtube', name: 'YouTube', connected: false, presence: 'Ready to connect' },
  { id: 'twitch', name: 'Twitch', connected: true, presence: 'Live channel sync' },
  { id: 'psn', name: 'PlayStation', connected: false, presence: 'Ready to connect' },
  { id: 'xbox', name: 'Xbox', connected: false, presence: 'Ready to connect' },
];

let bots: Bot[] = [
  { name: 'Music Queue', job: 'Voice music playback', enabled: true },
  { name: 'RPG Quest', job: 'Channel game loop', enabled: false },
  { name: 'Giveaway', job: 'Draws and raffles', enabled: true },
  { name: 'Support Desk', job: 'Ticket routing', enabled: true },
  { name: 'Social Relay', job: 'Auto posts external updates', enabled: false },
];

const stickers = ['Approved', 'Ship it', 'Needs QA'];
const soundboard = ['Launch', 'Decision', 'Blocked', 'Victory'];
const activities = ['Watch Together', 'Chess in the Park', 'Gartic Draw', 'Poker Night'];

let messages: Message[] = [
  {
    id: 1,
    channelId: 'announcements',
    author: 'Mira',
    role: 'Admin',
    time: '09:12',
    body: '**Release candidate is frozen.** @everyone only escalate blockers with a clear owner.',
    pinned: true,
    reactions: [{ name: 'ship', count: 8, me: true }],
    thread: { title: 'Release freeze questions', replies: ['Can QA still file blockers?', 'Yes, with owner and repro steps.'] },
  },
  {
    id: 2,
    channelId: 'announcements',
    author: 'Ken',
    role: 'Frontend',
    time: '09:18',
    body: 'Build preview passed. `npm run build` and typecheck are green.',
    reactions: [{ name: 'check', count: 5 }],
  },
  {
    id: 3,
    channelId: 'general',
    author: 'Aya',
    role: 'Design systems',
    time: '09:24',
    body: 'Tokens are locked: ~~extra accents~~, **8px grid**, and `4px radius`.',
    edited: true,
    reactions: [{ name: 'eyes', count: 3 }],
  },
  {
    id: 4,
    channelId: 'handoff',
    author: 'Lin',
    role: 'QA',
    time: '10:18',
    body: '@here mobile drawer needs one more pass after the composer change.',
    reactions: [{ name: 'bug', count: 2 }],
  },
  {
    id: 5,
    channelId: 'ship-room',
    author: 'Rae',
    role: 'Release',
    time: '11:02',
    body: 'Final checklist is ready.\n```txt\nversion-lock\nbuild\ntypecheck\n```',
    pinned: true,
    reactions: [{ name: 'pin', count: 1, me: true }],
  },
  {
    id: 6,
    channelId: 'forum-qna',
    author: 'Noah',
    role: 'Moderator',
    time: '11:14',
    body: '[help] How should forum tags be ordered for bug triage?',
    reactions: [{ name: 'thread', count: 4 }],
    thread: { title: 'Forum tag taxonomy', replies: ['bug before help', 'showcase stays last'] },
  },
];

let moderationQueue: ModerationItem[] = [
  { id: 1, source: '#general', reason: 'Blocked keyword', content: 'Suspicious invite link detected by AutoMod.', status: 'pending' },
  { id: 2, source: '#handoff', reason: 'Spam burst', content: 'Five repeated messages from a new account.', status: 'pending' },
  { id: 3, source: 'DM request', reason: 'Potential scam', content: 'External giveaway message sent to three members.', status: 'blocked' },
];

let notifications: NotificationItem[] = [
  { id: 1, title: '@Mira mentioned you', body: 'Release freeze questions has a new reply.', read: false },
  { id: 2, title: 'Webhook delivered', body: 'GitHub pushed a new PR update into #ship-room.', read: false },
  { id: 3, title: 'AutoMod blocked message', body: 'A suspicious invite link is waiting for review.', read: false },
];

let auditLog: AuditEvent[] = [
  { id: 1, time: '09:12', actor: 'Mira', action: 'Pinned release freeze announcement.' },
  { id: 2, time: '09:24', actor: 'Aya', action: 'Locked design tokens.' },
  { id: 3, time: '10:18', actor: 'Lin', action: 'Flagged mobile drawer for QA.' },
];

const state: AppState = {
  activeServer: servers[0].id,
  activeChannel: channels[0].id,
  activeView: 'chat',
  membersOpen: true,
  replyTo: null,
  draftText: '',
  searchQuery: '',
  profileStatus: 'Online',
  customStatus: 'Focus on your life.',
  markdownSample: '**Bold** _italic_ ~~strike~~ `code` @Mira @admin @everyone',
  voiceJoined: false,
  voiceMode: 'voice',
  krisp: true,
  echoCancel: true,
  pushKey: 'V',
  cameraOn: false,
  shareMode: 'none',
  systemAudio: true,
  streamQuality: '1080p 60fps',
  selectedDM: dms[0].id,
  groupDraft: ['Mira', 'Ken', 'Aya'],
  stageSpeaker: false,
  stageRaisedHand: false,
  automodEnabled: true,
  welcomeGate: true,
  nitro: false,
  boosts: 2,
  exportText: '',
};

export function createDiscordApp(root: HTMLElement) {
  hydrate();
  render(root);
}

const STORAGE_KEY = 'discord-2-0-state-v2';
let hydrated = false;

function hydrate() {
  if (hydrated) return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw) as Partial<{
      state: Partial<AppState>;
      channels: Channel[];
      voiceUsers: VoiceUser[];
      dms: DM[];
      roles: Role[];
      connections: Connection[];
      bots: Bot[];
      messages: Message[];
      moderationQueue: ModerationItem[];
      notifications: NotificationItem[];
      auditLog: AuditEvent[];
    }>;

    Object.assign(state, saved.state ?? {});
    if (saved.channels) channels = saved.channels;
    if (saved.voiceUsers) voiceUsers = saved.voiceUsers;
    if (saved.dms) dms = saved.dms;
    if (saved.roles) roles = saved.roles;
    if (saved.connections) connections = saved.connections;
    if (saved.bots) bots = saved.bots;
    if (saved.messages) messages = saved.messages;
    if (saved.moderationQueue) moderationQueue = saved.moderationQueue;
    if (saved.notifications) notifications = saved.notifications;
    if (saved.auditLog) auditLog = saved.auditLog;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

function persist() {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        state,
        channels,
        voiceUsers,
        dms,
        roles,
        connections,
        bots,
        messages,
        moderationQueue,
        notifications,
        auditLog,
      }),
    );
  } catch {
    // Storage can be unavailable in private browsing; the UI still works in memory.
  }
}

function render(root: HTMLElement) {
  persist();
  const currentServer = servers.find((server) => server.id === state.activeServer) ?? servers[0];
  const currentChannel = channels.find((channel) => channel.id === state.activeChannel) ?? channels[0];

  root.innerHTML = `
    <div class="app-shell">
      ${serverRail()}
      ${workspaceNav(currentServer)}
      <main class="chat-pane">
        ${topbar(currentChannel)}
        ${viewSwitcher()}
        ${mainView(currentChannel)}
      </main>
      ${sidePanel(currentChannel)}
    </div>
  `;

  bindEvents(root);
}

function serverRail() {
  return `
    <aside class="server-rail" aria-label="Servers">
      <button class="server-create" aria-label="Create server" title="Create server">${icon('plus')}</button>
      <div class="server-list">
        ${servers
          .map(
            (server) => `
              <button class="server-button ${state.activeServer === server.id ? 'active' : ''}" data-server="${server.id}" aria-label="${server.name}" title="${server.name}">
                <span>${server.mark}</span>
                ${server.unread > 0 ? `<b>${server.unread}</b>` : ''}
              </button>
            `,
          )
          .join('')}
      </div>
      <button class="server-tool" data-view="server" aria-label="Server settings" title="Server settings">${icon('settings')}</button>
    </aside>
  `;
}

function workspaceNav(server: Server) {
  const visibleChannels = filteredChannels();
  const categories = [...new Set(visibleChannels.map((channel) => channel.category))];
  return `
    <aside class="workspace-nav" id="workspaceNav">
      <div class="workspace-head">
        <div>
          <span class="eyebrow">Standalone server</span>
          <h1>${server.name}</h1>
        </div>
        <button class="icon-button mobile-only" data-close-nav aria-label="Close menu">${icon('x')}</button>
      </div>

      <div class="workspace-search">
        ${icon('search')}
        <input id="workspaceSearch" aria-label="Search channels and messages" placeholder="Search" value="${escapeAttribute(state.searchQuery)}" />
      </div>

      <nav class="channel-list" aria-label="Channels">
        ${categories
          .map((category) => channelSection(category, visibleChannels.filter((channel) => channel.category === category)))
          .join('')}
        ${visibleChannels.length ? '' : '<div class="empty-mini">No channels match.</div>'}
      </nav>

      <div class="nav-section feature-nav">
        <div class="section-label"><span>Control</span></div>
        ${navButton('chat', 'Messages', 'hash')}
        ${navButton('voice', 'Voice', 'voice')}
        ${navButton('video', 'Video and Go Live', 'video')}
        ${navButton('dms', 'DMs', 'dm')}
        ${navButton('server', 'Server admin', 'shield')}
        ${navButton('integrations', 'Integrations', 'link')}
        ${navButton('profile', 'Profile and Nitro', 'user')}
      </div>
    </aside>
  `;
}

function channelSection(label: string, items: Channel[]) {
  return `
    <div class="nav-section">
      <div class="section-label">
        <span>${label}</span>
        <button aria-label="Add ${label.toLowerCase()} channel" title="Add ${label.toLowerCase()} channel">${icon('plus')}</button>
      </div>
      ${items
        .map(
          (channel) => `
            <button class="channel-button ${state.activeChannel === channel.id ? 'active' : ''}" data-channel="${channel.id}">
              ${channelIcon(channel.kind)}
              <span>${channel.name}</span>
              ${channel.unread ? `<b>${channel.unread}</b>` : ''}
            </button>
          `,
        )
        .join('')}
    </div>
  `;
}

function navButton(view: AppView, label: string, iconName: string) {
  return `
    <button class="channel-button ${state.activeView === view ? 'active' : ''}" data-view="${view}">
      ${icon(iconName)}
      <span>${label}</span>
    </button>
  `;
}

function topbar(channel: Channel) {
  const unread = unreadNotifications();
  return `
    <header class="chat-topbar">
      <div class="chat-title">
        <button class="icon-button mobile-only" data-open-nav aria-label="Open menu">${icon('menu')}</button>
        <span class="channel-mark">${channelIcon(channel.kind)}</span>
        <div>
          <span class="eyebrow">${labelForChannel(channel.kind)}</span>
          <h2>${channel.name}</h2>
        </div>
      </div>

      <div class="topbar-actions">
        <button class="icon-button ${channel.following ? 'active' : ''}" data-action="follow" aria-label="Follow announcement" title="Follow announcement">${icon('broadcast')}</button>
        <button class="icon-button" data-action="inbox" aria-label="Inbox" title="Inbox">${icon('inbox')}${unread ? `<b>${unread}</b>` : ''}</button>
        <button class="icon-button ${state.membersOpen ? 'active' : ''}" data-toggle-members aria-label="Toggle members" title="Toggle members">${icon('users')}</button>
      </div>
    </header>
  `;
}

function viewSwitcher() {
  return `
    <section class="focus-strip" aria-label="Room status">
      <div>
        <span class="eyebrow">Room focus</span>
        <p>One workspace for messages, voice, video, server management, integrations, and profile controls.</p>
      </div>
      <button class="primary-button" data-view="server">${icon('check')} Configure</button>
    </section>
  `;
}

function mainView(channel: Channel) {
  if (state.activeView === 'voice') return voiceView();
  if (state.activeView === 'video') return videoView();
  if (state.activeView === 'dms') return dmView();
  if (state.activeView === 'server') return serverView();
  if (state.activeView === 'integrations') return integrationsView();
  if (state.activeView === 'profile') return profileView();
  return chatView(channel);
}

function chatView(channel: Channel) {
  const channelMessages = messages.filter((message) => message.channelId === channel.id && messageMatchesSearch(message));
  const replyMessage = messages.find((message) => message.id === state.replyTo);

  return `
    <section class="content-area">
      ${searchSummary()}
      <div class="tool-grid two">
        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Markdown preview</span>
              <h3>Composer formatting</h3>
            </div>
            <button class="ghost-button" data-markdown-sample>Cycle sample</button>
          </div>
          <div class="markdown-preview">${renderMarkdown(state.markdownSample)}</div>
        </article>

        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Mentions</span>
              <h3>@user @role @everyone @here</h3>
            </div>
            <button class="ghost-button" data-insert-mention="@here">Insert @here</button>
          </div>
          <div class="mention-row">
            ${['@Mira', '@admin', '@everyone', '@here'].map((mention) => `<button data-insert-mention="${mention}">${mention}</button>`).join('')}
          </div>
        </article>
      </div>

      <div class="message-scroll" aria-live="polite">
        ${
          channel.kind === 'forum'
            ? forumPosts(channelMessages)
            : channelMessages.length
              ? channelMessages.map(messageView).join('')
              : emptyState('No messages yet', 'Start the room with one clear next move.')
        }
      </div>

      <form class="composer" id="composer">
        <button type="button" data-attach aria-label="Attach file" title="Attach file">${icon('plus')}</button>
        <div class="composer-stack">
          ${replyMessage ? `<div class="reply-preview">Replying to ${replyMessage.author}: ${escapeHtml(replyMessage.body.slice(0, 80))}<button type="button" data-clear-reply>Cancel</button></div>` : ''}
          <input id="messageDraft" value="${escapeAttribute(state.draftText)}" placeholder="Message #${channel.name} with Markdown, @mentions, GIF, or emoji" aria-label="Message ${channel.name}" />
        </div>
        <button class="send-button" type="submit" aria-label="Send message" title="Send message">${icon('send')}</button>
      </form>
    </section>
  `;
}

function messageView(message: Message) {
  const reply = message.replyTo ? messages.find((item) => item.id === message.replyTo) : null;
  return `
    <article class="message ${message.pinned ? 'pinned' : ''}">
      <div class="avatar" aria-hidden="true">${initials(message.author)}</div>
      <div class="message-body">
        ${reply ? `<div class="reply-line">Reply to ${reply.author}: ${escapeHtml(reply.body.slice(0, 72))}</div>` : ''}
        <div class="message-meta">
          <strong>${message.author}</strong>
          <span>${message.role}</span>
          <time>${message.time}</time>
          ${message.edited ? '<em>edited</em>' : ''}
          ${message.pinned ? '<em>pinned</em>' : ''}
        </div>
        <div class="message-content">${renderMarkdown(message.body)}</div>
        <div class="reaction-row">
          ${message.reactions.map((reaction) => `<button class="${reaction.me ? 'active' : ''}" data-react="${message.id}" data-reaction="${reaction.name}">${reaction.name} ${reaction.count}</button>`).join('')}
          <button data-react="${message.id}" data-reaction="plus">+ reaction</button>
          <button data-gif="${message.id}">GIF</button>
        </div>
        ${message.thread ? threadPreview(message) : ''}
      </div>
      <div class="message-actions">
        <button data-message-action="reply" data-message-id="${message.id}" title="Reply">${icon('reply')}</button>
        <button data-message-action="thread" data-message-id="${message.id}" title="Thread">${icon('thread')}</button>
        <button data-message-action="pin" data-message-id="${message.id}" title="Pin">${icon('pin')}</button>
        <button data-message-action="forward" data-message-id="${message.id}" title="Forward">${icon('forward')}</button>
        <button data-message-action="edit" data-message-id="${message.id}" title="Edit">${icon('edit')}</button>
        <button data-message-action="delete" data-message-id="${message.id}" title="Delete">${icon('delete')}</button>
      </div>
    </article>
  `;
}

function threadPreview(message: Message) {
  if (!message.thread) return '';
  return `
    <div class="thread-box">
      <div>
        <strong>${escapeHtml(message.thread.title)}</strong>
        <span>${message.thread.replies.length} replies</span>
      </div>
      <button class="ghost-button" data-thread-reply="${message.id}">Reply in thread</button>
      <ul>
        ${message.thread.replies.map((reply) => `<li>${escapeHtml(reply)}</li>`).join('')}
      </ul>
    </div>
  `;
}

function forumPosts(items: Message[]) {
  return `
    <div class="forum-grid">
      ${items
        .map(
          (message) => `
            <article class="forum-card">
              <div class="forum-tags">${(channels.find((item) => item.id === message.channelId)?.tags ?? []).map((tag) => `<span>${tag}</span>`).join('')}</div>
              <h3>${renderMarkdown(message.body)}</h3>
              <p>${message.thread?.replies.length ?? 0} replies by ${message.author}</p>
              <button class="ghost-button" data-message-action="thread" data-message-id="${message.id}">Open thread</button>
            </article>
          `,
        )
        .join('')}
    </div>
  `;
}

function voiceView() {
  return `
    <section class="content-area">
      <div class="voice-stage">
        <div>
          <span class="eyebrow">${state.voiceJoined ? 'Connected' : 'Ready'}</span>
          <h2>${state.voiceJoined ? 'Critique room' : 'Click to join voice'}</h2>
          <p>${state.voiceMode === 'ptt' ? `Push to Talk key: ${state.pushKey}` : 'Voice activity is listening for speech.'}</p>
        </div>
        <button class="primary-button" data-toggle-voice>${state.voiceJoined ? 'Leave voice' : 'Join voice'}</button>
      </div>

      <div class="tool-grid two">
        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Per-user volume</span>
              <h3>Mix everyone separately</h3>
            </div>
          </div>
          <div class="voice-user-list">
            ${voiceUsers
              .map(
                (user) => `
                  <div class="voice-user ${user.speaking ? 'speaking' : ''}">
                    <div class="avatar small">${initials(user.name)}</div>
                    <div>
                      <strong>${user.name}</strong>
                      <span>${user.role}</span>
                    </div>
                    <input type="range" min="0" max="100" value="${user.volume}" data-volume-user="${user.name}" aria-label="${user.name} volume" />
                    <button class="ghost-button ${user.muted ? 'active' : ''}" data-mute-user="${user.name}">${user.muted ? 'Unmute' : 'Mute'}</button>
                  </div>
                `,
              )
              .join('')}
          </div>
        </article>

        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Voice mode</span>
              <h3>Input and suppression</h3>
            </div>
          </div>
          <div class="setting-grid">
            ${toggleButton('voice-mode', 'Voice activity', state.voiceMode === 'voice', 'voice')}
            ${toggleButton('voice-mode', 'Push to Talk', state.voiceMode === 'ptt', 'ptt')}
            ${toggleButton('krisp', 'Krisp AI noise suppression', state.krisp)}
            ${toggleButton('echo', 'Echo cancellation', state.echoCancel)}
          </div>
        </article>
      </div>

      <article class="surface-panel">
        <div class="panel-head">
          <div>
            <span class="eyebrow">Stage channel</span>
            <h3>Speakers and listeners</h3>
          </div>
          <button class="ghost-button" data-stage-hand>${state.stageRaisedHand ? 'Lower hand' : 'Raise hand'}</button>
        </div>
        <div class="stage-row">
          <div><strong>Speakers</strong><span>${state.stageSpeaker ? 'You, Mira' : 'Mira'}</span></div>
          <div><strong>Listeners</strong><span>42 listening</span></div>
          <button class="primary-button" data-stage-speaker>${state.stageSpeaker ? 'Return to audience' : 'Promote to speaker'}</button>
        </div>
      </article>
    </section>
  `;
}

function videoView() {
  return `
    <section class="content-area">
      <div class="video-grid">
        <article class="video-tile primary">
          <span>${state.cameraOn ? 'Camera on' : 'Camera off'}</span>
          <strong>You</strong>
        </article>
        <article class="video-tile"><span>Camera</span><strong>Mira</strong></article>
        <article class="video-tile"><span>Screen</span><strong>Ken</strong></article>
        <article class="video-tile"><span>Voice</span><strong>Aya</strong></article>
      </div>

      <div class="call-controls">
        <button class="${state.cameraOn ? 'active' : ''}" data-toggle-camera>${state.cameraOn ? 'Stop camera' : 'Start camera'}</button>
        <button class="${state.shareMode === 'screen' ? 'active' : ''}" data-share-mode="screen">Share screen</button>
        <button class="${state.shareMode === 'window' ? 'active' : ''}" data-share-mode="window">Share window</button>
        <button class="${state.systemAudio ? 'active' : ''}" data-system-audio>System audio</button>
      </div>

      <div class="tool-grid two">
        <article class="surface-panel">
          <span class="eyebrow">Go Live</span>
          <h3>${state.shareMode === 'none' ? 'No active share' : `Sharing ${state.shareMode}`}</h3>
          <p>Quality: ${state.streamQuality}</p>
          <div class="segmented">
            ${['720p 30fps', '1080p 60fps', '4K 60fps'].map((quality) => `<button class="${state.streamQuality === quality ? 'active' : ''}" data-quality="${quality}">${quality}</button>`).join('')}
          </div>
        </article>
        <article class="surface-panel">
          <span class="eyebrow">Session</span>
          <h3>Multi-person video call</h3>
          <p>Camera, screen, app-window share, and system audio controls are available in the call bar.</p>
        </article>
      </div>
      <article class="surface-panel">
        <div class="panel-head">
          <div>
            <span class="eyebrow">Local workspace</span>
            <h3>Persistence, export, reset</h3>
          </div>
          <div class="btn-row-tight">
            <button class="ghost-button" data-export-settings>Export JSON</button>
            <button class="ghost-button" data-reset-local>Reset local state</button>
          </div>
        </div>
        <textarea class="export-box" readonly aria-label="Exported local settings">${escapeHtml(state.exportText || 'Changes are saved locally in this browser. Export when you need a snapshot.')}</textarea>
      </article>
    </section>
  `;
}

function dmView() {
  const selected = dms.find((dm) => dm.id === state.selectedDM) ?? dms[0];
  const group = dms.find((dm) => dm.id === 'release-group') ?? selected;
  const groupFull = group.members.length >= 10;
  return `
    <section class="content-area">
      <div class="tool-grid two">
        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Direct messages</span>
              <h3>1:1 and groups</h3>
            </div>
            <button class="ghost-button" data-create-group ${groupFull ? 'disabled' : ''}>Add member</button>
          </div>
          <div class="dm-list">
            ${dms
              .map(
                (dm) => `
                  <button class="${state.selectedDM === dm.id ? 'active' : ''}" data-dm="${dm.id}">
                    <strong>${dm.name}</strong>
                    <span>${dm.type === 'group' ? `${dm.members.length}/10 members` : '1:1 DM'}</span>
                  </button>
                `,
              )
              .join('')}
          </div>
        </article>
        <article class="surface-panel">
          <span class="eyebrow">${selected.type === 'group' ? 'Group DM' : 'Private DM'}</span>
          <h3>${selected.name}</h3>
          <p>${selected.members.join(', ')}</p>
          <div class="call-controls compact">
            <button>Message</button>
            <button>Voice call</button>
            <button>Video call</button>
          </div>
        </article>
      </div>
      <article class="surface-panel">
        <span class="eyebrow">Group limit</span>
        <h3>${group.members.length}/10 members</h3>
        <p>${group.members.join(', ')}</p>
      </article>
    </section>
  `;
}

function serverView() {
  return `
    <section class="content-area">
      <div class="tool-grid two">
        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Channel types</span>
              <h3>Text, voice, announcement, stage, forum</h3>
            </div>
            <button class="ghost-button" data-view="chat">Open channels</button>
          </div>
          <div class="channel-matrix">
            ${channels
              .map(
                (channel) => `
                  <div>
                    ${channelIcon(channel.kind)}
                    <strong>${channel.name}</strong>
                    <span>${labelForChannel(channel.kind)}</span>
                    ${channel.kind === 'announcement' ? `<button data-follow-announcement>${channel.following ? 'Following' : 'Follow'}</button>` : ''}
                  </div>
                `,
              )
              .join('')}
          </div>
        </article>

        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Roles and permissions</span>
              <h3>Granular access</h3>
            </div>
            <button class="ghost-button" data-add-role>Add role</button>
          </div>
          <div class="permission-table">
            <div class="permission-head"><span>Role</span>${permissionKeys.map((key) => `<span>${key}</span>`).join('')}</div>
            ${roles
              .map(
                (role) => `
                  <div class="permission-row">
                    <strong><i style="background:${role.color}">${role.icon}</i>${role.name}</strong>
                    ${permissionKeys.map((key) => `<button class="${role.permissions[key] ? 'active' : ''}" data-permission="${role.id}:${key}">${role.permissions[key] ? 'Yes' : 'No'}</button>`).join('')}
                  </div>
                `,
              )
              .join('')}
          </div>
        </article>
      </div>

      <div class="tool-grid three">
        <article class="surface-panel">
          <span class="eyebrow">Custom content</span>
          <h3>Emoji, stickers, soundboard</h3>
          <div class="pill-row">${['ship', 'check', 'bug', 'eyes'].map((item) => `<button>${item}</button>`).join('')}</div>
          <div class="pill-row">${stickers.map((item) => `<button>${item}</button>`).join('')}</div>
          <div class="pill-row">${soundboard.map((item) => `<button data-sound="${item}">${item}</button>`).join('')}</div>
        </article>
        <article class="surface-panel">
          <span class="eyebrow">AutoMod</span>
          <h3>Safety automation</h3>
          ${toggleButton('automod', 'Block words, spam, malicious links', state.automodEnabled)}
          ${toggleButton('welcome', 'Membership screening and welcome guide', state.welcomeGate)}
          <div class="moderation-list">
            ${moderationQueue.map(moderationItemView).join('')}
          </div>
        </article>
        <article class="surface-panel">
          <span class="eyebrow">Server insights</span>
          <h3>Community health</h3>
          <dl class="metric-list">
            <div><dt>Activity</dt><dd>84%</dd></div>
            <div><dt>Retention</dt><dd>71%</dd></div>
            <div><dt>New members</dt><dd>128</dd></div>
          </dl>
        </article>
      </div>
    </section>
  `;
}

function integrationsView() {
  return `
    <section class="content-area">
      <div class="tool-grid two">
        <article class="surface-panel">
          <div class="panel-head">
            <div>
              <span class="eyebrow">Connections</span>
              <h3>External accounts and Rich Presence</h3>
            </div>
          </div>
          <div class="connection-list">
            ${connections
              .map(
                (connection) => `
                  <button class="${connection.connected ? 'active' : ''}" data-connection="${connection.id}">
                    <strong>${connection.name}</strong>
                    <span>${connection.presence}</span>
                  </button>
                `,
              )
              .join('')}
          </div>
        </article>
        <article class="surface-panel">
          <span class="eyebrow">Bots and webhooks</span>
          <h3>Automation ecosystem</h3>
          <div class="bot-list">
            ${bots
              .map(
                (bot) => `
                  <button class="${bot.enabled ? 'active' : ''}" data-bot="${bot.name}">
                    <strong>${bot.name}</strong>
                    <span>${bot.job}</span>
                  </button>
                `,
              )
              .join('')}
          </div>
          <div class="webhook-card">
            <strong>GitHub webhook</strong>
            <span>Pushes commits and PR updates into #ship-room</span>
          </div>
        </article>
      </div>

      <article class="surface-panel">
        <div class="panel-head">
          <div>
            <span class="eyebrow">Activities</span>
            <h3>Launch inside voice</h3>
          </div>
        </div>
        <div class="activity-row">
          ${activities.map((activity) => `<button data-activity="${activity}">${activity}</button>`).join('')}
        </div>
      </article>
    </section>
  `;
}

function profileView() {
  return `
    <section class="content-area">
      <div class="profile-hero">
        <div class="avatar large">YO</div>
        <div>
          <span class="eyebrow">Profile</span>
          <h2>yo20ywork-max</h2>
          <p>${escapeHtml(state.customStatus)}</p>
        </div>
        <button class="primary-button" data-nitro>${state.nitro ? 'Nitro active' : 'Enable Nitro preview'}</button>
      </div>

      <div class="tool-grid two">
        <article class="surface-panel">
          <span class="eyebrow">Free personalization</span>
          <h3>Avatar, bio, banner color, status</h3>
          <div class="segmented">
            ${['Online', 'Idle', 'Do Not Disturb', 'Invisible'].map((status) => `<button class="${state.profileStatus === status ? 'active' : ''}" data-status="${status}">${status}</button>`).join('')}
          </div>
          <input class="wide-input" id="customStatus" value="${escapeAttribute(state.customStatus)}" aria-label="Custom status" />
        </article>
        <article class="surface-panel">
          <span class="eyebrow">Discord Nitro</span>
          <h3>Subscription benefits</h3>
          <div class="nitro-grid">
            ${['Cross-server emoji and stickers', '500MB uploads', '4K 60fps streams', 'GIF avatar', 'Profile themes', 'Server-specific profiles'].map((benefit) => `<div>${benefit}</div>`).join('')}
          </div>
          <div class="boost-line">
            <span>Server boosts: ${state.boosts}</span>
            <button class="ghost-button" data-boost>Use boost</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function sidePanel(channel: Channel) {
  return `
    <aside class="member-pane ${state.membersOpen ? 'open' : ''}" aria-label="Members and context">
      <div class="member-head">
        <div>
          <span class="eyebrow">Context</span>
          <h2>${labelForChannel(channel.kind)}</h2>
        </div>
        <button class="icon-button" data-view="profile" aria-label="Open profile">${icon('user')}</button>
      </div>

      ${pinnedList()}
      ${threadList()}
      ${notificationList()}
      ${auditLogList()}
      ${memberList()}
      ${safetyNote()}
    </aside>
  `;
}

function pinnedList() {
  const pinned = messages.filter((message) => message.pinned);
  return `
    <section class="context-block">
      <span class="eyebrow">Pinned</span>
      ${pinned.map((message) => `<button data-jump-message="${message.id}"><strong>${message.author}</strong><span>${escapeHtml(message.body.slice(0, 64))}</span></button>`).join('')}
    </section>
  `;
}

function threadList() {
  const threaded = messages.filter((message) => message.thread);
  return `
    <section class="context-block">
      <span class="eyebrow">Threads</span>
      ${threaded.map((message) => `<button data-message-action="thread" data-message-id="${message.id}"><strong>${message.thread?.title}</strong><span>${message.thread?.replies.length} replies</span></button>`).join('')}
    </section>
  `;
}

function memberList() {
  return `
    <section class="context-block">
      <span class="eyebrow">Online</span>
      ${voiceUsers
        .map(
          (member) => `
            <div class="member-row">
              <div class="avatar small">${initials(member.name)}</div>
              <div><strong>${member.name}</strong><span>${member.role}</span></div>
              <i class="${member.speaking ? 'online' : 'idle'}"></i>
            </div>
          `,
        )
        .join('')}
    </section>
  `;
}

function safetyNote() {
  return `
    <div class="security-note">
      ${icon('shield')}
      <div>
        <strong>Protected workspace</strong>
        <p>AutoMod, screening, permissions, and private threads are configured locally in this prototype.</p>
      </div>
      ${icon('chevron')}
    </div>
  `;
}

function filteredChannels() {
  const query = state.searchQuery.trim().toLowerCase();
  if (!query) return channels;
  return channels.filter((channel) =>
    [channel.name, channel.kind, channel.category, ...(channel.tags ?? [])].some((value) => value.toLowerCase().includes(query)),
  );
}

function messageMatchesSearch(message: Message) {
  const query = state.searchQuery.trim().toLowerCase();
  if (!query) return true;
  return [message.author, message.role, message.body, message.thread?.title ?? ''].some((value) => value.toLowerCase().includes(query));
}

function searchSummary() {
  const query = state.searchQuery.trim();
  if (!query) return '';
  const messageCount = messages.filter(messageMatchesSearch).length;
  const channelCount = filteredChannels().length;
  return `
    <article class="surface-panel search-summary">
      <span class="eyebrow">Search</span>
      <h3>${escapeHtml(query)}</h3>
      <p>${channelCount} matching channels · ${messageCount} matching messages</p>
      <button class="ghost-button" data-clear-search>Clear search</button>
    </article>
  `;
}

function unreadNotifications() {
  return notifications.filter((item) => !item.read).length;
}

function notificationList() {
  return `
    <section class="context-block">
      <span class="eyebrow">Notifications</span>
      ${notifications
        .map(
          (item) => `
            <button class="${item.read ? '' : 'active'}" data-notification="${item.id}">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.body)}</span>
            </button>
          `,
        )
        .join('')}
    </section>
  `;
}

function auditLogList() {
  return `
    <section class="context-block">
      <span class="eyebrow">Audit log</span>
      ${auditLog
        .slice(-5)
        .reverse()
        .map(
          (item) => `
            <button>
              <strong>${item.time} · ${item.actor}</strong>
              <span>${escapeHtml(item.action)}</span>
            </button>
          `,
        )
        .join('')}
    </section>
  `;
}

function moderationItemView(item: ModerationItem) {
  return `
    <div class="moderation-item ${item.status}">
      <div>
        <strong>${escapeHtml(item.reason)}</strong>
        <span>${escapeHtml(item.source)} · ${item.status}</span>
        <p>${escapeHtml(item.content)}</p>
      </div>
      <div class="btn-row-tight">
        <button class="ghost-button" data-moderation-id="${item.id}" data-moderation-action="approved">Approve</button>
        <button class="ghost-button" data-moderation-id="${item.id}" data-moderation-action="blocked">Block</button>
      </div>
    </div>
  `;
}

function markNotificationRead(id: number) {
  const item = notifications.find((notification) => notification.id === id);
  if (item) item.read = true;
}

function moderateItem(id: number, action: string) {
  const item = moderationQueue.find((entry) => entry.id === id);
  if (!item || (action !== 'approved' && action !== 'blocked')) return;
  item.status = action;
  notify('AutoMod reviewed', `${item.reason} marked ${action}.`);
  logEvent(`Moderation item ${item.id} marked ${action}.`);
}

function notify(title: string, body: string) {
  notifications = [
    { id: Date.now(), title, body, read: false },
    ...notifications,
  ].slice(0, 12);
}

function logEvent(action: string) {
  auditLog = [
    ...auditLog,
    {
      id: Date.now(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actor: 'You',
      action,
    },
  ].slice(-24);
}

function exportSettings() {
  state.exportText = JSON.stringify(
    {
      state,
      channels,
      voiceUsers,
      dms,
      roles,
      connections,
      bots,
      messages,
      moderationQueue,
      notifications,
      auditLog,
    },
    null,
    2,
  );
  logEvent('Exported local workspace settings.');
}

function bindEvents(root: HTMLElement) {
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest('button') as HTMLButtonElement | null;
    if (!button) return;

    if (button.dataset.server) state.activeServer = button.dataset.server;
    if (button.dataset.channel) {
      state.activeChannel = button.dataset.channel;
      const channel = channels.find((item) => item.id === state.activeChannel);
      state.activeView = channel?.kind === 'voice' || channel?.kind === 'stage' ? 'voice' : 'chat';
    }
    if (button.dataset.view) state.activeView = button.dataset.view as AppView;
    if (button.matches('[data-open-nav]')) root.querySelector('#workspaceNav')?.classList.add('open');
    if (button.matches('[data-close-nav]')) root.querySelector('#workspaceNav')?.classList.remove('open');
    if (button.matches('[data-toggle-members]')) state.membersOpen = !state.membersOpen;
    if (button.dataset.action === 'inbox') state.membersOpen = true;
    if (button.matches('[data-toggle-voice]')) state.voiceJoined = !state.voiceJoined;
    if (button.dataset.muteUser) toggleUserMute(button.dataset.muteUser);
    if (button.dataset.voiceMode) state.voiceMode = button.dataset.voiceMode as VoiceMode;
    if (button.matches('[data-krisp]')) state.krisp = !state.krisp;
    if (button.matches('[data-echo]')) state.echoCancel = !state.echoCancel;
    if (button.matches('[data-stage-hand]')) state.stageRaisedHand = !state.stageRaisedHand;
    if (button.matches('[data-stage-speaker]')) state.stageSpeaker = !state.stageSpeaker;
    if (button.matches('[data-toggle-camera]')) state.cameraOn = !state.cameraOn;
    if (button.dataset.shareMode) state.shareMode = state.shareMode === button.dataset.shareMode ? 'none' : (button.dataset.shareMode as ShareMode);
    if (button.matches('[data-system-audio]')) state.systemAudio = !state.systemAudio;
    if (button.dataset.quality) state.streamQuality = button.dataset.quality;
    if (button.dataset.dm) state.selectedDM = button.dataset.dm;
    if (button.matches('[data-create-group]')) addGroupMember();
    if (button.matches('[data-add-role]')) addRole();
    if (button.dataset.permission) togglePermission(button.dataset.permission);
    if (button.matches('[data-follow-announcement]') || button.dataset.action === 'follow') toggleAnnouncementFollow();
    if (button.matches('[data-automod]')) state.automodEnabled = !state.automodEnabled;
    if (button.matches('[data-welcome]')) state.welcomeGate = !state.welcomeGate;
    if (button.dataset.connection) toggleConnection(button.dataset.connection);
    if (button.dataset.bot) toggleBot(button.dataset.bot);
    if (button.dataset.status) state.profileStatus = button.dataset.status as AppState['profileStatus'];
    if (button.matches('[data-nitro]')) state.nitro = !state.nitro;
    if (button.matches('[data-boost]')) state.boosts += 1;
    if (button.matches('[data-markdown-sample]')) cycleMarkdownSample();
    if (button.dataset.insertMention) insertMention(root, button.dataset.insertMention);
    if (button.dataset.messageAction && button.dataset.messageId) handleMessageAction(button.dataset.messageAction, Number(button.dataset.messageId));
    if (button.dataset.react && button.dataset.reaction) addReaction(Number(button.dataset.react), button.dataset.reaction);
    if (button.dataset.gif) addGif(Number(button.dataset.gif));
    if (button.dataset.threadReply) addThreadReply(Number(button.dataset.threadReply));
    if (button.dataset.notification) markNotificationRead(Number(button.dataset.notification));
    if (button.dataset.moderationAction && button.dataset.moderationId) moderateItem(Number(button.dataset.moderationId), button.dataset.moderationAction);
    if (button.matches('[data-export-settings]')) exportSettings();
    if (button.matches('[data-reset-local]')) {
      window.localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
      return;
    }
    if (button.matches('[data-attach]')) state.draftText = `${state.draftText}${state.draftText ? ' ' : ''}[file: release-notes.pdf]`;
    if (button.dataset.sound) logEvent(`Played soundboard effect: ${button.dataset.sound}.`);
    if (button.dataset.activity) logEvent(`Started activity: ${button.dataset.activity}.`);
    if (button.matches('[data-clear-reply]')) state.replyTo = null;
    if (button.matches('[data-clear-search]')) state.searchQuery = '';

    render(root);
  });

  root.querySelector<HTMLFormElement>('#composer')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const body = state.draftText.trim();
    if (!body) return;
    messages = [
      ...messages,
      {
        id: Date.now(),
        channelId: state.activeChannel,
        author: 'You',
        role: 'Operator',
        time: 'now',
        body,
        replyTo: state.replyTo ?? undefined,
        reactions: [],
      },
    ];
    state.replyTo = null;
    state.draftText = '';
    notify('Message sent', `Posted in #${state.activeChannel}.`);
    logEvent(`Sent message in #${state.activeChannel}.`);
    render(root);
  });

  root.querySelector<HTMLInputElement>('#workspaceSearch')?.addEventListener('input', (event) => {
    state.searchQuery = (event.target as HTMLInputElement).value;
    render(root);
    root.querySelector<HTMLInputElement>('#workspaceSearch')?.focus();
  });

  root.querySelector<HTMLInputElement>('#messageDraft')?.addEventListener('input', (event) => {
    state.draftText = (event.target as HTMLInputElement).value;
  });

  root.querySelector<HTMLInputElement>('#customStatus')?.addEventListener('change', (event) => {
    state.customStatus = (event.target as HTMLInputElement).value;
    logEvent('Updated profile status text.');
    render(root);
  });

  root.querySelectorAll<HTMLInputElement>('[data-volume-user]').forEach((input) => {
    input.addEventListener('change', () => {
      const user = voiceUsers.find((item) => item.name === input.dataset.volumeUser);
      if (user) user.volume = Number(input.value);
      render(root);
    });
  });
}

function handleMessageAction(action: string, id: number) {
  const message = messages.find((item) => item.id === id);
  if (!message) return;

  if (action === 'reply') state.replyTo = id;
  if (action === 'pin') {
    message.pinned = !message.pinned;
    logEvent(`${message.pinned ? 'Pinned' : 'Unpinned'} message from ${message.author}.`);
  }
  if (action === 'thread') {
    if (!message.thread) message.thread = { title: `Thread for ${message.author}`, replies: [] };
    message.thread.replies.push('New thread reply from You.');
    logEvent(`Added thread reply for ${message.author}.`);
  }
  if (action === 'forward') {
    messages = [
      ...messages,
      {
        id: Date.now(),
        channelId: state.activeChannel,
        author: 'You',
        role: 'Operator',
        time: 'now',
        body: `Forwarded from ${message.author}: ${message.body}`,
        reactions: [{ name: 'forward', count: 1, me: true }],
      },
    ];
    logEvent(`Forwarded message from ${message.author}.`);
  }
  if (action === 'edit') {
    message.body = `${message.body} (edited)`;
    message.edited = true;
    logEvent(`Edited message from ${message.author}.`);
  }
  if (action === 'delete') {
    messages = messages.filter((item) => item.id !== id);
    logEvent(`Deleted message from ${message.author}.`);
  }
}

function addReaction(id: number, name: string) {
  const message = messages.find((item) => item.id === id);
  if (!message) return;
  const reactionName = name === 'plus' ? 'custom' : name;
  const reaction = message.reactions.find((item) => item.name === reactionName);
  if (reaction) {
    reaction.count += 1;
    reaction.me = true;
  } else {
    message.reactions.push({ name: reactionName, count: 1, me: true });
  }
  logEvent(`Reacted with ${reactionName}.`);
}

function addGif(id: number) {
  const message = messages.find((item) => item.id === id);
  if (!message) return;
  message.reactions.push({ name: 'GIF', count: 1, me: true });
  logEvent('Added GIF reaction.');
}

function addThreadReply(id: number) {
  const message = messages.find((item) => item.id === id);
  if (!message) return;
  if (!message.thread) message.thread = { title: `Thread for ${message.author}`, replies: [] };
  message.thread.replies.push('Thread reply added.');
  logEvent(`Replied in thread: ${message.thread.title}.`);
}

function addGroupMember() {
  const pool = ['Noah', 'Rae', 'Ivy', 'Sam', 'Tess', 'Owen', 'Nia'];
  const group = dms.find((dm) => dm.id === 'release-group');
  if (!group) return;
  const next = pool.find((name) => !group.members.includes(name));
  if (next && group.members.length < 10) {
    group.members.push(next);
    logEvent(`Added ${next} to Release group DM.`);
  }
}

function toggleUserMute(name: string) {
  const user = voiceUsers.find((item) => item.name === name);
  if (user) {
    user.muted = !user.muted;
    logEvent(`${user.muted ? 'Muted' : 'Unmuted'} ${name}.`);
  }
}

function toggleAnnouncementFollow() {
  const channel = channels.find((item) => item.kind === 'announcement');
  if (channel) {
    channel.following = !channel.following;
    logEvent(`${channel.following ? 'Followed' : 'Unfollowed'} announcement channel.`);
  }
}

function addRole() {
  const id = `role-${roles.length + 1}`;
  roles.push({
    id,
    name: `Role ${roles.length + 1}`,
    color: '#666666',
    icon: String(roles.length + 1),
    permissions: { View: true, Send: true, Images: false, Voice: false, Manage: false },
  });
  logEvent(`Created ${id}.`);
}

function togglePermission(value: string) {
  const [roleId, key] = value.split(':');
  const role = roles.find((item) => item.id === roleId);
  if (role && key) {
    role.permissions[key] = !role.permissions[key];
    logEvent(`Toggled ${key} permission for ${role.name}.`);
  }
}

function toggleConnection(id: string) {
  const connection = connections.find((item) => item.id === id);
  if (connection) {
    connection.connected = !connection.connected;
    logEvent(`${connection.connected ? 'Connected' : 'Disconnected'} ${connection.name}.`);
  }
}

function toggleBot(name: string) {
  const bot = bots.find((item) => item.name === name);
  if (bot) {
    bot.enabled = !bot.enabled;
    logEvent(`${bot.enabled ? 'Enabled' : 'Disabled'} ${bot.name}.`);
  }
}

function cycleMarkdownSample() {
  const samples = [
    '**Bold** _italic_ ~~strike~~ `code` @Mira @admin @everyone',
    '```js\nconst ready = true;\n```',
    '@here review the **pinned** release note and reply in thread.',
  ];
  const index = samples.indexOf(state.markdownSample);
  state.markdownSample = samples[(index + 1) % samples.length];
}

function insertMention(root: HTMLElement, mention: string) {
  const input = root.querySelector<HTMLInputElement>('#messageDraft');
  const current = input?.value ?? state.draftText;
  state.draftText = `${current}${current ? ' ' : ''}${mention} `;
}

function toggleButton(dataName: string, label: string, active: boolean, value?: string) {
  const valueAttr = value ? ` data-${dataName}="${value}"` : ` data-${dataName}`;
  return `<button class="toggle-button ${active ? 'active' : ''}"${valueAttr}>${label}</button>`;
}

function renderMarkdown(value: string) {
  let html = escapeHtml(value);
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/~~([^~]+)~~/g, '<del>$1</del>');
  html = html.replace(/(^|[\s])_([^_]+)_/g, '$1<em>$2</em>');
  html = html.replace(/(@everyone|@here|@[a-zA-Z][\w-]*)/g, '<mark>$1</mark>');
  return html.replace(/\n/g, '<br />');
}

function channelIcon(kind: ChannelKind) {
  if (kind === 'voice') return icon('voice');
  if (kind === 'private') return icon('lock');
  if (kind === 'announcement') return icon('broadcast');
  if (kind === 'stage') return icon('stage');
  if (kind === 'forum') return icon('forum');
  return icon('hash');
}

function labelForChannel(kind: ChannelKind) {
  const labels: Record<ChannelKind, string> = {
    text: 'Text channel',
    voice: 'Voice channel',
    private: 'Private channel',
    announcement: 'Announcement channel',
    stage: 'Stage channel',
    forum: 'Forum channel',
  };
  return labels[kind];
}

function emptyState(title: string, body: string) {
  return `<div class="empty-state">${icon('message')}<h3>${title}</h3><p>${body}</p></div>`;
}

function icon(name: string) {
  const icons: Record<string, string> = {
    bell: '!',
    broadcast: 'A',
    check: 'OK',
    chevron: 'v',
    delete: 'X',
    dm: 'DM',
    edit: 'E',
    forum: 'F',
    forward: '>',
    hash: '#',
    headphones: 'HP',
    inbox: '[]',
    link: 'L',
    lock: 'L',
    menu: '=',
    message: 'M',
    mic: 'MI',
    pin: 'P',
    plus: '+',
    reply: 'R',
    search: '?',
    send: '>',
    settings: 'S',
    shield: 'D',
    stage: 'ST',
    thread: 'T',
    user: 'U',
    users: 'G',
    video: 'V',
    voice: 'VC',
    x: 'X',
  };
  return `<span class="icon" aria-hidden="true">${icons[name] ?? ''}</span>`;
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return entities[char];
  });
}

function escapeAttribute(value: string) {
  return escapeHtml(value).replace(/`/g, '&#096;');
}

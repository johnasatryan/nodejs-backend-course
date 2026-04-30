function parseCommand(line) {
  const text = line.trim();

  if (!text) return { type: 'empty' };

  if (text.startsWith('/dm')) {
    const rest = text.slice(4).trim();

    const space = rest.indexOf(' ');

    if (space === -1) {
      return { type: 'error', error: 'Usage: /dm <username> <message>' };
    }

    return {
      type: 'dm',
      target: rest.slice(0, space),
      message: rest.slice(space + 1).trim(),
    };
  }

  if (text === '/list') {
    return { type: 'list' };
  }

  if (text === '/quit') {
    return { type: 'quit' };
  }

  return { type: 'broadcast', message: text };
}

module.exports = { parseCommand };

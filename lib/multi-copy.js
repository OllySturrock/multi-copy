'use babel';
import { CompositeDisposable } from 'atom';
const multi_copy = {
  activate (state) {
    this.what_has_been_copied = new current_copied_class();
    this.subscriptions = new CompositeDisposable();
    //Copy function registrations
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-1': () => this.copy(1)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-2': () => this.copy(2)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-3': () => this.copy(3)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-4': () => this.copy(4)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-5': () => this.copy(5)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-6': () => this.copy(6)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-7': () => this.copy(7)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-8': () => this.copy(8)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:copy-9': () => this.copy(9)
    }));
    //paste function registrations
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-1': () => this.paste(1)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-2': () => this.paste(2)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-3': () => this.paste(3)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-4': () => this.paste(4)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-5': () => this.paste(5)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-6': () => this.paste(6)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-7': () => this.paste(7)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-8': () => this.paste(8)
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-copy:paste-9': () => this.paste(9)
    }));

  },
  deactivate () {
    this.subscriptions.dispose();
  },
  copy(to_pos_) {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let the_what = editor.getSelectedText()
      this.what_has_been_copied.current_copied[to_pos_] =  the_what;
    };
  },
  paste(from_pos_) {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      if (typeof this.what_has_been_copied.current_copied[from_pos_] !== 'undefined') {
        editor.insertText(this.what_has_been_copied.current_copied[from_pos_]);
      }
    };
  }
};

class current_copied_class {
  constructor() {
    this.current_copied = [];
  }
};

export default multi_copy;

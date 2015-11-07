var WizardBall = WizardBall || {};

WizardBall.preload = function(){};
var levelData;
WizardBall.preload.prototype = {

	preload: function(){
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
		this.splash.anchor.setTo(0.5);

		this.preloadBar = this.add.sprite(this.game.world.centerX,this.game.world.centerY, "loader");
		this.preloadBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloadBar);

		levelData = $.parseJSON(
           $.ajax({
                   url: "json/levelData.json", 
                   async: false, 
                   dataType: 'json'
                }
            ).responseText
        );

		this.loadTitleResources();
		this.loadPlayResources();
		this.loadTransitionEffects();
		this.loadCharacterSelectResources();
		this.loadLobbyResources();
		this.loadSetupResources();
		this.loadPendingGameResources();
	},

	loadTitleResources: function(){
		this.game.load.image('titleScreen', levelData.title_screen.background);
	},

	loadPlayResources : function(){
		this.game.load.spritesheet('player',levelData.test_level.player, 140, 210);
        this.game.load.image('background', levelData.test_level.background);
        this.game.load.image('ball', levelData.test_level.ball);
        this.game.load.audio('bgmusic',levelData.test_level.bgmusic);
	},

	loadTransitionEffects : function(){
		this.game.load.image('yellowBar',levelData.special.trans_yellow);
		this.game.load.image('greenBar', levelData.special.trans_green);
		this.game.load.image('redBar', levelData.special.trans_red);
		this.game.load.image('purpleBar', levelData.special.trans_purple);
	},


	loadCharacterSelectResources : function(){
		this.game.load.image('selectBackground', levelData.character_select.background);
		this.game.load.image('accent1', levelData.character_select.accent1);
		this.game.load.image('accent2', levelData.character_select.accent2);
		this.game.load.image("characterSplash", levelData.character_select.character_splash);
	},

	loadLobbyResources : function(){
		this.game.load.image('levelPreview', levelData.lobby.level_preview);
		this.game.load.spritesheet('buttonTextures', levelData.lobby.button_textures,levelData.lobby.button_width,levelData.lobby.button_height);

	},

	loadSetupResources : function(){
		this.game.load.spritesheet('leftButton', levelData.setup.left_button, levelData.setup.lr_button_width,levelData.setup.lr_button_height);
		this.game.load.spritesheet('rightButton', levelData.setup.right_button, levelData.setup.lr_button_width,levelData.setup.lr_button_height);
		this.game.load.spritesheet('okButton', levelData.setup.ok_button, levelData.setup.ok_button_width,levelData.setup.ok_button_height);
	},

	loadPendingGameResources : function() {
		this.game.load.spritesheet('StartButton', levelData.pendinggame.start_button, levelData.pendinggame.sl_button_width, levelData.pendinggame.sl_button_height);
		this.game.load.spritesheet('LeaveButton', levelData.pendinggame.leave_button, levelData.pendinggame.sl_button_width, levelData.pendinggame.sl_button_height);
		this.game.load.spritesheet('CharacterSlot', levelData.pendinggame.character_slot, levelData.pendinggame.characterslot_width, levelData.pendinggame.characterslot_height);
	},

	create: function(){
		this.state.start("Lobby");
	}
};
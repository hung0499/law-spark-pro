import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Send, 
  BookOpen, 
  Scale, 
  MessageCircle,
  Lightbulb,
  Target,
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  skillArea?: string;
}

const Copilot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm your AI co-pilot for legal education. I'm here to help you develop critical legal reasoning skills. What area of law would you like to explore today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentSkill, setCurrentSkill] = useState<string | null>(null);

  const skillAreas = [
    { 
      name: "Knowledge & Recall", 
      description: "Learn and remember legal rules accurately",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    { 
      name: "Factual Analysis", 
      description: "Identify legal issues and analyze facts",
      icon: Target,
      color: "bg-green-500"
    },
    { 
      name: "Doctrinal Analysis", 
      description: "Apply legal principles to new situations",
      icon: Scale,
      color: "bg-purple-500"
    },
    { 
      name: "Critical Evaluation", 
      description: "Assess and critique legal arguments",
      icon: Brain,
      color: "bg-orange-500"
    },
  ];

  const samplePrompts = [
    "Help me analyze this contract law scenario...",
    "Explain the ratio decidendi in this case...",
    "What are the key elements of negligence?",
    "How do I structure a legal argument?",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    // Simulate AI response
    const aiMessage: Message = {
      id: messages.length + 2,
      type: 'assistant',
      content: "I understand you'd like to explore this legal concept. Let me guide you through this step by step, focusing on developing your analytical skills...",
      timestamp: new Date(),
      skillArea: currentSkill || "Doctrinal Analysis",
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold mb-2">AI Legal Co-pilot</h1>
        <p className="text-muted-foreground">
          Develop your legal reasoning skills with personalized AI guidance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Skill Areas Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Focus Areas</CardTitle>
              <CardDescription>
                Select a skill area to focus your learning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {skillAreas.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Button
                    key={skill.name}
                    variant={currentSkill === skill.name ? "default" : "elegant"}
                    className="w-full justify-start h-auto p-3"
                    onClick={() => setCurrentSkill(skill.name)}
                  >
                    <div className={cn("w-3 h-3 rounded-full mr-3", skill.color)} />
                    <div className="text-left">
                      <div className="font-medium text-sm">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {skill.description}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Lightbulb className="h-5 w-5 mr-2" />
                Quick Prompts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {samplePrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full text-left justify-start h-auto p-2 text-xs"
                  onClick={() => setInputValue(prompt)}
                >
                  "{prompt}"
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <Card className="shadow-card h-[600px] flex flex-col">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-primary" />
                  <CardTitle>Legal Reasoning Session</CardTitle>
                </div>
                {currentSkill && (
                  <Badge variant="secondary" className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    {currentSkill}
                  </Badge>
                )}
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.type === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-4 space-y-2",
                      message.type === 'user'
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <div className="text-sm">{message.content}</div>
                    <div className="flex items-center justify-between text-xs opacity-70">
                      <span>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                      {message.skillArea && message.type === 'assistant' && (
                        <Badge variant="outline" className="text-xs">
                          {message.skillArea}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Input Area */}
            <div className="border-t border-border p-4">
              <div className="flex space-x-4">
                <Textarea
                  placeholder="Ask about legal concepts, request case analysis, or seek guidance on legal reasoning..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 min-h-[60px] resize-none"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="lg"
                  className="self-end"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>Press Enter to send, Shift+Enter for new line</span>
                {currentSkill && (
                  <span className="flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Focusing on {currentSkill}
                  </span>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Session Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4 flex items-center">
            <MessageCircle className="h-8 w-8 text-primary mr-3" />
            <div>
              <div className="font-semibold">12 Messages</div>
              <div className="text-sm text-muted-foreground">This session</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 flex items-center">
            <Clock className="h-8 w-8 text-primary mr-3" />
            <div>
              <div className="font-semibold">23 min</div>
              <div className="text-sm text-muted-foreground">Session duration</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 flex items-center">
            <CheckCircle2 className="h-8 w-8 text-success mr-3" />
            <div>
              <div className="font-semibold">Active Learning</div>
              <div className="text-sm text-muted-foreground">Engagement level</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Copilot;